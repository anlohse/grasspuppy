export interface Unit {
    id: string;
    order: number;
    nameKey: string;
    descriptionKey: string;
    icon?: string;
}

export interface SandboxConfig {
    initialCode?: string;
    allowedApis?: string[];
    suggestedApis?: string[];
}

export interface LessonStep {
    id: string;
    type: 'content' | 'task' | 'quiz' | 'checkpoint' | 'demo' | 'challenge' | 'debugging' | 'predict' | 'compare' | 'reflection';
    titleKey?: string;
    bodyKey?: string;
    title?: string; // Fallback for raw strings if needed
    body?: string;  // Fallback for raw strings if needed
    order: number;
    starterCode?: string;
    validation?: {
        mode: 'all' | 'any';
        rules: any[];
    };
    hints?: { level: number; hintKey: string }[];
    successMessageKey?: string;
    failureMessageKey?: string;
    focus?: { target: string, style: string }[];
}

export interface Lesson {
    id: string;
    unitId: string;
    order: number;
    difficulty: 'beginner' | 'easy' | 'medium';
    estimatedMinutes: number;
    titleKey: string;
    summaryKey: string;
    learningObjectivesKeys: string[];
    tags: string[];
    sandbox: SandboxConfig;
    steps: LessonStep[];
}

export class LessonManager {
    private units: Unit[] = [];
    private lessons: Lesson[] = [];
    private currentLessonIndex: number = -1;
    private currentStepIndex: number = 0;

    setCurriculum(units: Unit[], lessons: Lesson[]): void {
        this.units = units.sort((a, b) => a.order - b.order);
        this.lessons = lessons.sort((a, b) => {
            const unitA = this.units.find(u => u.id === a.unitId);
            const unitB = this.units.find(u => u.id === b.unitId);
            if (unitA && unitB && unitA.order !== unitB.order) {
                return unitA.order - unitB.order;
            }
            return a.order - b.order;
        });
    }

    getUnits(): Unit[] {
        return this.units;
    }

    getLessonsByUnit(unitId: string): Lesson[] {
        return this.lessons.filter(l => l.unitId === unitId);
    }

    loadLessonById(id: string): void {
        const index = this.lessons.findIndex(l => l.id === id);
        if (index !== -1) {
            this.currentLessonIndex = index;
            this.currentStepIndex = 0;
        }
    }

    getCurrentStep(): LessonStep | null {
        const lesson = this.getLesson();
        if (!lesson) return null;
        return lesson.steps[this.currentStepIndex];
    }

    nextStep(): 'next-step' | 'next-lesson' | 'finished' {
        const lesson = this.getLesson();
        if (!lesson) return 'finished';

        if (this.currentStepIndex < lesson.steps.length - 1) {
            this.currentStepIndex++;
            return 'next-step';
        } else {
            if (this.currentLessonIndex < this.lessons.length - 1) {
                this.currentLessonIndex++;
                this.currentStepIndex = 0;
                return 'next-lesson';
            } else {
                return 'finished';
            }
        }
    }

    previousStep(): boolean {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            return true;
        }
        return false;
    }

    getLesson(): Lesson | null {
        if (this.currentLessonIndex === -1) return null;
        return this.lessons[this.currentLessonIndex];
    }

    getStepIndex(): number {
        return this.currentStepIndex;
    }

    reset(): void {
        this.currentLessonIndex = -1;
        this.currentStepIndex = 0;
    }
}

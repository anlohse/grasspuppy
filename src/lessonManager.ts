export interface SandboxConfig {
    initialCode?: string;
    allowedApis?: string[];
    suggestedApis?: string[];
}

export interface LessonStep {
    id: string;
    type: 'content' | 'task' | 'quiz' | 'checkpoint' | 'demo';
    title: string;
    body: string;
    order: number;
    starterCode?: string;
    validation?: {
        mode: 'all' | 'any';
        rules: any[];
    };
    hints?: { level: number; text: string }[];
    successMessage?: string;
    failureMessage?: string;
}

export interface Lesson {
    id: string;
    title: string;
    summary: string;
    sandbox: SandboxConfig;
    steps: LessonStep[];
}

export class LessonManager {
    private lessons: Lesson[] = [];
    private currentLessonIndex: number = -1;
    private currentStepIndex: number = 0;

    setLessons(lessons: Lesson[]): void {
        this.lessons = lessons;
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
            // Last step of current lesson
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

import { Lesson, Unit } from './lessonManager';
import { units } from './curriculum/units';
import { unit01Lessons } from './curriculum/lessons/unit-01';

export function getCurriculum(): { units: Unit[], lessons: Lesson[] } {
    const allLessons: Lesson[] = [
        ...unit01Lessons
        // ... more unit lessons will be added here
    ];

    return {
        units: units.sort((a, b) => a.order - b.order),
        lessons: allLessons.sort((a, b) => a.order - b.order)
    };
}

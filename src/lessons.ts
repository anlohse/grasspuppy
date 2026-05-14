import { Lesson, Unit } from './lessonManager';
import { units } from './curriculum/units';
import { unit01Lessons } from './curriculum/lessons/unit-01';
import { unit02Lessons } from './curriculum/lessons/unit-02';

export function getCurriculum(): { units: Unit[], lessons: Lesson[] } {
    const allLessons: Lesson[] = [
        ...unit01Lessons,
        ...unit02Lessons
    ];

    return {
        units: units.sort((a, b) => a.order - b.order),
        lessons: allLessons.sort((a, b) => a.order - b.order)
    };
}

import { Lesson } from '../../lessonManager';

export const unit01Lessons: Lesson[] = [
    {
        id: 'u1-l1',
        unitId: 'unit-1',
        order: 10,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l1.title',
        summaryKey: 'lessons.u1l1.summary',
        learningObjectivesKeys: ['lessons.u1l1.obj1'],
        tags: ['intro'],
        sandbox: {},
        steps: [
            {
                id: 'u1l1s1',
                type: 'content',
                titleKey: 'lessons.u1l1.s1.title',
                bodyKey: 'lessons.u1l1.s1.body',
                order: 10,
                focus: [{ target: 'editor', style: 'highlight' }],
                starterCode: `// Welcome to Grasspup! Let's start by writing some code.\n\nprint("Hello, world!");`
            }
        ]
    },
    {
        id: 'u1-l2',
        unitId: 'unit-1',
        order: 20,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l2.title',
        summaryKey: 'lessons.u1l2.summary',
        learningObjectivesKeys: ['lessons.u1l2.obj1'],
        tags: ['execution'],
        sandbox: {},
        steps: [
            {
                id: 'u1l2s1',
                type: 'content',
                titleKey: 'lessons.u1l2.s1.title',
                bodyKey: 'lessons.u1l2.s1.body',
                order: 10,
                focus: [{ target: 'runButton', style: 'pulse' }]
            }
        ]
    },
    {
        id: 'u1-l3',
        unitId: 'unit-1',
        order: 30,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l3.title',
        summaryKey: 'lessons.u1l3.summary',
        learningObjectivesKeys: ['lessons.u1l3.obj1'],
        tags: ['functions'],
        sandbox: {},
        steps: [
            {
                id: 'u1l3s1',
                type: 'content',
                titleKey: 'lessons.u1l3.s1.title',
                bodyKey: 'lessons.u1l3.s1.body',
                order: 10
            }
        ]
    },
    {
        id: 'u1-l4',
        unitId: 'unit-1',
        order: 40,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l4.title',
        summaryKey: 'lessons.u1l4.summary',
        learningObjectivesKeys: ['lessons.u1l4.obj1'],
        tags: ['print'],
        sandbox: { allowedApis: ['print'] },
        steps: [
            {
                id: 'u1l4s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l4.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [{ type: 'calledFunction', name: 'print' }]
                }
            }
        ]
    }
    // More lessons would follow here...
];

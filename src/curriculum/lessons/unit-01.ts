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
    },
    {
        id: 'u1-l5',
        unitId: 'unit-1',
        order: 50,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l5.title',
        summaryKey: 'lessons.u1l5.summary',
        learningObjectivesKeys: ['lessons.u1l5.obj1'],
        tags: ['sequencing'],
        sandbox: { allowedApis: ['print'] },
        steps: [
            {
                id: 'u1l5s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l5.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [{ type: 'calledFunctionCount', name: 'print', count: 2 }]
                }
            }
        ]
    },
    {
        id: 'u1-l6',
        unitId: 'unit-1',
        order: 60,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l6.title',
        summaryKey: 'lessons.u1l6.summary',
        learningObjectivesKeys: ['lessons.u1l6.obj1'],
        tags: ['visual'],
        sandbox: { allowedApis: ['drawBox'] },
        steps: [
            {
                id: 'u1l6s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l6.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [{ type: 'boxColorCountEquals', color: 'red', count: 1 }]
                }
            }
        ]
    },
    {
        id: 'u1-l7',
        unitId: 'unit-1',
        order: 70,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l7.title',
        summaryKey: 'lessons.u1l7.summary',
        learningObjectivesKeys: ['lessons.u1l7.obj1'],
        tags: ['arguments'],
        sandbox: { allowedApis: ['drawBox'] },
        steps: [
            {
                id: 'u1l7s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l7.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'boxColorCountEquals', color: 'red', count: 1 },
                        { type: 'boxColorCountEquals', color: 'blue', count: 1 },
                        { type: 'boxColorCountEquals', color: 'green', count: 1 }
                    ]
                }
            }
        ]
    },
    {
        id: 'u1-l8',
        unitId: 'unit-1',
        order: 80,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l8.title',
        summaryKey: 'lessons.u1l8.summary',
        learningObjectivesKeys: ['lessons.u1l8.obj1'],
        tags: ['errors'],
        sandbox: {},
        steps: [
            {
                id: 'u1l8s1',
                type: 'content',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l8.s1.body',
                order: 10,
                starterCode: 'prunt("Erro de propósito")'
            }
        ]
    },
    {
        id: 'u1-l9',
        unitId: 'unit-1',
        order: 90,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u1l9.title',
        summaryKey: 'lessons.u1l9.summary',
        learningObjectivesKeys: ['lessons.u1l9.obj1'],
        tags: ['debugging'],
        sandbox: { allowedApis: ['print'] },
        steps: [
            {
                id: 'u1l9s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l9.s1.body',
                order: 10,
                starterCode: 'prunt("Conserte-me!")',
                validation: {
                    mode: 'all',
                    rules: [{ type: 'calledFunction', name: 'print' }]
                }
            }
        ]
    },
    {
        id: 'u1-l10',
        unitId: 'unit-1',
        order: 100,
        difficulty: 'beginner',
        estimatedMinutes: 10,
        titleKey: 'lessons.u1l10.title',
        summaryKey: 'lessons.u1l10.summary',
        learningObjectivesKeys: ['lessons.u1l10.obj1'],
        tags: ['challenge'],
        sandbox: { allowedApis: ['drawBox', 'print'] },
        steps: [
            {
                id: 'u1l10s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u1l10.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [{ type: 'boxCountAtLeast', count: 3 }]
                }
            }
        ]
    }
];

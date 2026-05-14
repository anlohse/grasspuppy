import { Lesson } from '../../lessonManager';

export const unit02Lessons: Lesson[] = [
    {
        id: 'u2-l11',
        unitId: 'unit-2',
        order: 110,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u2l11.title',
        summaryKey: 'lessons.u2l11.summary',
        learningObjectivesKeys: ['lessons.u2l11.obj1'],
        tags: ['sequencing'],
        sandbox: { allowedApis: ['drawBox'] },
        steps: [
            {
                id: 'u2l11s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l11.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['yb'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l12',
        unitId: 'unit-2',
        order: 120,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u2l12.title',
        summaryKey: 'lessons.u2l12.summary',
        learningObjectivesKeys: ['lessons.u2l12.obj1'],
        tags: ['repetition'],
        sandbox: { allowedApis: ['drawBox'] },
        steps: [
            {
                id: 'u2l12s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l12.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'boxColorCountEquals', color: 'red', count: 4 }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l13',
        unitId: 'unit-2',
        order: 130,
        difficulty: 'beginner',
        estimatedMinutes: 5,
        titleKey: 'lessons.u2l13.title',
        summaryKey: 'lessons.u2l13.summary',
        learningObjectivesKeys: ['lessons.u2l13.obj1'],
        tags: ['layout'],
        sandbox: { allowedApis: ['drawBox', 'newLine'] },
        steps: [
            {
                id: 'u2l13s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l13.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['g', 'g'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l14',
        unitId: 'unit-2',
        order: 140,
        difficulty: 'beginner',
        estimatedMinutes: 7,
        titleKey: 'lessons.u2l14.title',
        summaryKey: 'lessons.u2l14.summary',
        learningObjectivesKeys: ['lessons.u2l14.obj1'],
        tags: ['grid'],
        sandbox: { allowedApis: ['drawBox', 'newLine'] },
        steps: [
            {
                id: 'u2l14s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l14.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['bb', 'bb'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l15',
        unitId: 'unit-2',
        order: 150,
        difficulty: 'easy',
        estimatedMinutes: 10,
        titleKey: 'lessons.u2l15.title',
        summaryKey: 'lessons.u2l15.summary',
        learningObjectivesKeys: ['lessons.u2l15.obj1'],
        tags: ['composition'],
        sandbox: { allowedApis: ['drawBox', 'newLine'] },
        steps: [
            {
                id: 'u2l15s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l15.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['ggg', 'yyy', 'bbb'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l16',
        unitId: 'unit-2',
        order: 160,
        difficulty: 'easy',
        estimatedMinutes: 7,
        titleKey: 'lessons.u2l16.title',
        summaryKey: 'lessons.u2l16.summary',
        learningObjectivesKeys: ['lessons.u2l16.obj1'],
        tags: ['patterns'],
        sandbox: { allowedApis: ['drawBox'] },
        steps: [
            {
                id: 'u2l16s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l16.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['rbybr'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l17',
        unitId: 'unit-2',
        order: 170,
        difficulty: 'easy',
        estimatedMinutes: 7,
        titleKey: 'lessons.u2l17.title',
        summaryKey: 'lessons.u2l17.summary',
        learningObjectivesKeys: ['lessons.u2l17.obj1'],
        tags: ['patterns'],
        sandbox: { allowedApis: ['drawBox'] },
        steps: [
            {
                id: 'u2l17s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l17.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['wgwgwg'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l18',
        unitId: 'unit-2',
        order: 180,
        difficulty: 'easy',
        estimatedMinutes: 10,
        titleKey: 'lessons.u2l18.title',
        summaryKey: 'lessons.u2l18.summary',
        learningObjectivesKeys: ['lessons.u2l18.obj1'],
        tags: ['pixel-art'],
        sandbox: { allowedApis: ['drawBox', 'newLine'] },
        steps: [
            {
                id: 'u2l18s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l18.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'renderMatchesRows', rows: ['r', 'r', 'rr'] }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l19',
        unitId: 'unit-2',
        order: 190,
        difficulty: 'medium',
        estimatedMinutes: 15,
        titleKey: 'lessons.u2l19.title',
        summaryKey: 'lessons.u2l19.summary',
        learningObjectivesKeys: ['lessons.u2l19.obj1'],
        tags: ['challenge'],
        sandbox: { allowedApis: ['drawBox', 'newLine'] },
        steps: [
            {
                id: 'u2l19s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l19.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'boxCountAtLeast', count: 9 }
                    ]
                }
            }
        ]
    },
    {
        id: 'u2-l20',
        unitId: 'unit-2',
        order: 200,
        difficulty: 'medium',
        estimatedMinutes: 20,
        titleKey: 'lessons.u2l20.title',
        summaryKey: 'lessons.u2l20.summary',
        learningObjectivesKeys: ['lessons.u2l20.obj1'],
        tags: ['project'],
        sandbox: { allowedApis: ['drawBox', 'newLine', 'print'] },
        steps: [
            {
                id: 'u2l20s1',
                type: 'task',
                titleKey: 'ui.lesson',
                bodyKey: 'lessons.u2l20.s1.body',
                order: 10,
                validation: {
                    mode: 'all',
                    rules: [
                        { type: 'boxCountAtLeast', count: 1 },
                        { type: 'printedTextExists' }
                    ]
                }
            }
        ]
    }
];

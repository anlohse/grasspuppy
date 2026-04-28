import { Lesson } from './lessonManager';
import { t, getLocale } from './i18n';

export function getLessons(): Lesson[] {
    const locale = getLocale();
    const helloValue = locale === 'pt-BR' ? 'Olá, Grasspuppy!' : 'Hello, Grasspuppy!';

    return [
        // Module 1: First Steps
        {
            id: 'lesson-01',
            title: t('lessons.l01.title'),
            summary: t('lessons.l01.summary'),
            sandbox: {},
            steps: [
                {
                    id: 'l01s1',
                    type: 'content',
                    title: t('lessons.l01.s1.title'),
                    body: t('lessons.l01.s1.body'),
                    order: 1,
                    focus: [{ target: 'editor', style: 'highlight' }]
                } as any
            ]
        },
        {
            id: 'lesson-02',
            title: t('lessons.l02.title'),
            summary: t('lessons.l02.summary'),
            sandbox: { allowedApis: ['print'] },
            steps: [
                { id: 'l02s1', type: 'content', title: t('lessons.l02.s1.title'), body: t('lessons.l02.s1.body'), order: 1 },
                {
                    id: 'l02s2',
                    type: 'task',
                    title: t('lessons.l02.s2.title'),
                    body: t('lessons.l02.s2.body'),
                    order: 2,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'calledFunction', name: 'print' },
                            { type: 'printedTextEquals', value: helloValue }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-03',
            title: t('lessons.l03.title'),
            summary: t('lessons.l03.summary'),
            sandbox: { allowedApis: ['drawBox'] },
            steps: [
                {
                    id: 'l03s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l03.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [{ type: 'boxColorCountEquals', color: 'red', count: 1 }]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-04',
            title: t('lessons.l04.title'),
            summary: t('lessons.l04.summary'),
            sandbox: { allowedApis: ['drawBox'] },
            steps: [
                {
                    id: 'l04s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l04.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'boxColorCountEquals', color: 'red', count: 1 },
                            { type: 'boxColorCountEquals', color: 'blue', count: 1 },
                            { type: 'boxColorCountEquals', color: 'green', count: 1 }
                        ]
                    }
                } as any
            ]
        },

        // Module 2: Sequences
        {
            id: 'lesson-05',
            title: t('lessons.l05.title'),
            summary: t('lessons.l05.summary'),
            sandbox: { allowedApis: ['drawBox'] },
            steps: [
                {
                    id: 'l05s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l05.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'boxCountEquals', count: 3 },
                            { type: 'renderMatchesRows', rows: ["ryb"] }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-06',
            title: t('lessons.l06.title'),
            summary: t('lessons.l06.summary'),
            sandbox: { allowedApis: ['drawBox'] },
            steps: [
                {
                    id: 'l06s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l06.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [{ type: 'boxColorCountEquals', color: 'blue', count: 5 }]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-07',
            title: t('lessons.l07.title'),
            summary: t('lessons.l07.summary'),
            sandbox: { allowedApis: ['drawBox', 'newLine'] },
            steps: [
                {
                    id: 'l07s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l07.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'renderMatchesRows', rows: ["rr", "bb"] }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-08',
            title: t('lessons.l08.title'),
            summary: t('lessons.l08.summary'),
            sandbox: { allowedApis: ['drawBox', 'newLine'] },
            steps: [
                {
                    id: 'l08s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l08.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'renderMatchesRows', rows: ["rrr", "yyy", "bbb"] }
                        ]
                    }
                } as any
            ]
        },

        // Module 3: Variables
        {
            id: 'lesson-09',
            title: t('lessons.l09.title'),
            summary: t('lessons.l09.summary'),
            sandbox: { allowedApis: ['print'] },
            steps: [
                {
                    id: 'l09s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l09.s1.body'),
                    order: 1,
                    starterCode: 'let message = "Oi"\n',
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'declaredVariable', name: 'message' },
                            { type: 'printedTextExists' }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-10',
            title: t('lessons.l10.title'),
            summary: t('lessons.l10.summary'),
            sandbox: { allowedApis: ['print'] },
            steps: [
                {
                    id: 'l10s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l10.s1.body'),
                    order: 1,
                    starterCode: 'let name = "Puppy"\n',
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'printedTextContains', value: 'Olá' },
                            { type: 'printedTextContains', value: 'Puppy' }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-11',
            title: t('lessons.l11.title'),
            summary: t('lessons.l11.summary'),
            sandbox: { allowedApis: ['print', 'readLine'] },
            steps: [
                {
                    id: 'l11s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l11.s1.body'),
                    order: 1,
                    starterCode: 'print("Qual seu nome?")\nlet name = await readLine()\n',
                    validation: {
                        mode: 'all',
                        rules: [{ type: 'readLineCalled' }]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-12',
            title: t('lessons.l12.title'),
            summary: t('lessons.l12.summary'),
            sandbox: { allowedApis: ['print'] },
            steps: [
                {
                    id: 'l12s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l12.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [{ type: 'printedTextContains', value: '7' }]
                    }
                } as any
            ]
        },

        // Module 4: Decisions & Loops
        {
            id: 'lesson-13',
            title: t('lessons.l13.title'),
            summary: t('lessons.l13.summary'),
            sandbox: { allowedApis: ['print'] },
            steps: [
                {
                    id: 'l13s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l13.s1.body'),
                    order: 1,
                    starterCode: 'let score = 10\n',
                    validation: {
                        mode: 'all',
                        rules: [{ type: 'usedIfStatement' }]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-14',
            title: t('lessons.l14.title'),
            summary: t('lessons.l14.summary'),
            sandbox: { allowedApis: ['print'] },
            steps: [
                {
                    id: 'l14s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l14.s1.body'),
                    order: 1,
                    starterCode: 'let score = 3\n',
                    validation: {
                        mode: 'all',
                        rules: [{ type: 'usedElseStatement' }]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-15',
            title: t('lessons.l15.title'),
            summary: t('lessons.l15.summary'),
            sandbox: { allowedApis: ['drawBox'] },
            steps: [
                {
                    id: 'l15s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l15.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'usedForLoop' },
                            { type: 'boxColorCountEquals', color: 'green', count: 5 }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-16',
            title: t('lessons.l16.title'),
            summary: t('lessons.l16.summary'),
            sandbox: { allowedApis: ['drawBox', 'newLine'] },
            steps: [
                {
                    id: 'l16s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l16.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'usedForLoop' },
                            { type: 'renderMatchesRows', rows: ["yyy", "yyy", "yyy"] }
                        ]
                    }
                } as any
            ]
        },

        // Module 5: Functions & Arrays
        {
            id: 'lesson-17',
            title: t('lessons.l17.title'),
            summary: t('lessons.l17.summary'),
            sandbox: { allowedApis: ['drawBox', 'newLine'] },
            steps: [
                {
                    id: 'l17s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l17.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'declaredFunction', name: 'drawRow' },
                            { type: 'renderMatchesRows', rows: ["rrr", "rrr"] }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-18',
            title: t('lessons.l18.title'),
            summary: t('lessons.l18.summary'),
            sandbox: { allowedApis: ['drawBox', 'newLine'] },
            steps: [
                {
                    id: 'l18s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l18.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'declaredFunction', name: 'drawRow' },
                            { type: 'renderMatchesRows', rows: ["rrr", "bbb"] }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-19',
            title: t('lessons.l19.title'),
            summary: t('lessons.l19.summary'),
            sandbox: { allowedApis: ['print', 'pickRandom'] },
            steps: [
                {
                    id: 'l19s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l19.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'usedArrayLiteral' },
                            { type: 'calledFunction', name: 'pickRandom' }
                        ]
                    }
                } as any
            ]
        },
        {
            id: 'lesson-20',
            title: t('lessons.l20.title'),
            summary: t('lessons.l20.summary'),
            sandbox: { allowedApis: ['print', 'readLine', 'drawBox', 'newLine', 'pickRandom'] },
            steps: [
                {
                    id: 'l20s1',
                    type: 'task',
                    title: t('ui.lesson'),
                    body: t('lessons.l20.s1.body'),
                    order: 1,
                    validation: {
                        mode: 'all',
                        rules: [
                            { type: 'readLineCalled' },
                            { type: 'usedForLoop' },
                            { type: 'boxCountAtLeast', count: 1 }
                        ]
                    }
                } as any
            ]
        }
    ];
}

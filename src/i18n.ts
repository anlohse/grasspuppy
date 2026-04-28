export type Locale = 'pt-BR' | 'en-US';

const translations: Record<Locale, Record<string, string>> = {
    'pt-BR': {
        'ui.run': 'Executar',
        'ui.open': 'Abrir',
        'ui.save': 'Salvar',
        'ui.clean': 'Limpar',
        'ui.lessons': 'Lições',
        'ui.lesson': 'Lição',
        'ui.previous': 'Anterior',
        'ui.next': 'Próximo',
        'ui.savedScripts': 'Scripts Salvos',
        'ui.filename': 'Nome do Arquivo',
        'ui.filenamePlaceholder': 'Digite aqui o nome do arquivo',
        'ui.savedFiles': 'Arquivos salvos:',
        'ui.cancel': 'Cancelar',
        'ui.ok': 'Ok',
        'ui.errorTitle': 'Ops! Algo deu errado.',
        'ui.errorFriendly': 'Houve um erro ao executar seu código.',
        'ui.errorNotDefined': 'Você usou um nome que não existe: <strong>{name}</strong>. Verifique se digitou corretamente.',
        'ui.errorUnexpectedToken': 'Parece que há um erro de digitação ou falta um símbolo (como um parêntese ou vírgula).',
        'ui.viewTechnical': 'Ver detalhes técnicos',
        'ui.openFilePrompt': 'Nome do arquivo para abrir: ',
        'ui.saveFilePrompt': 'Nome do arquivo para salvar: ',
        'ui.untitled': 'Sem nome',
        'validation.correctText': 'Texto correto!',
        'validation.expected': 'Esperado: "{value}"',
        'validation.drewBoxes': 'Desenhou {count} caixas.',
        'validation.expectedBoxes': 'Esperado {count} caixas {color}, encontrou {found}.',
        'validation.usedLoop': 'Usou um loop!',
        'validation.tryLoop': 'Tente usar um loop "for".',
        'validation.calledFunction': 'Chamou {name}.',
        'validation.needFunction': 'Você precisa chamar a função {name}.',

        // Module 1
        'lessons.l01.title': '1. Bem-vindo ao Grasspuppy',
        'lessons.l01.summary': 'Conheça o editor e o painel de resultados.',
        'lessons.l01.s1.title': 'O seu novo playground',
        'lessons.l01.s1.body': 'No Grasspuppy, você escreve código à esquerda e vê o resultado à direita. O botão <b>Executar</b> faz a mágica acontecer.',
        'lessons.l02.title': '2. Sua primeira mensagem',
        'lessons.l02.summary': 'Aprenda a função print.',
        'lessons.l02.s1.title': 'Saída de texto',
        'lessons.l02.s1.body': 'Use <code>print("texto")</code> para mostrar mensagens. Clique em Próximo para tentar!',
        'lessons.l02.s2.title': 'Imprima algo',
        'lessons.l02.s2.body': 'Use a função <code>print</code> para mostrar "Olá, Grasspuppy!".',
        'lessons.l03.title': '3. Sua primeira caixa',
        'lessons.l03.summary': 'Desenhe algo visual.',
        'lessons.l03.s1.body': 'Use <code>drawBox(red)</code> para desenhar um quadrado vermelho.',
        'lessons.l04.title': '4. Cores como valores',
        'lessons.l04.summary': 'Use argumentos diferentes.',
        'lessons.l04.s1.body': 'Desenhe um quadrado vermelho, um azul e um verde.',

        // Module 2
        'lessons.l05.title': '5. Ordem dos Comandos',
        'lessons.l05.summary': 'Sequenciamento importa.',
        'lessons.l05.s1.body': 'Desenhe caixas na ordem: vermelho, amarelo e azul.',
        'lessons.l06.title': '6. Uma linha de caixas',
        'lessons.l06.summary': 'Repetição manual.',
        'lessons.l06.s1.body': 'Desenhe cinco caixas azuis.',
        'lessons.l07.title': '7. Nova linha',
        'lessons.l07.summary': 'Organize o layout.',
        'lessons.l07.s1.body': 'Desenhe 2 vermelhas em cima e 2 azuis embaixo.',
        'lessons.l08.title': '8. Crie uma bandeira',
        'lessons.l08.summary': 'Composição visual.',
        'lessons.l08.s1.body': 'Crie um padrão 3x3: 3 vermelhas, 3 amarelas, 3 azuis.',

        // Module 3
        'lessons.l09.title': '9. Variáveis',
        'lessons.l09.summary': 'Guarde valores para depois.',
        'lessons.l09.s1.body': 'Use <code>let message = "Oi"</code> e depois use <code>print(message)</code>.',
        'lessons.l10.title': '10. Combinando textos',
        'lessons.l10.summary': 'Concatenação.',
        'lessons.l10.s1.body': 'Combine uma variável de nome com "Olá, ".',
        'lessons.l11.title': '11. Pergunte ao usuário',
        'lessons.l11.summary': 'Entrada com readLine.',
        'lessons.l11.s1.body': 'Use <code>await readLine()</code> para perguntar o nome do usuário.',
        'lessons.l12.title': '12. Números e Contas',
        'lessons.l12.summary': 'Matemática simples.',
        'lessons.l12.s1.body': 'Calcule e imprima <code>3 + 4</code>.',

        // Module 4
        'lessons.l13.title': '13. Decisões (if)',
        'lessons.l13.summary': 'Execução condicional.',
        'lessons.l13.s1.body': 'Use <code>if</code> para imprimir uma mensagem se <code>score > 5</code>.',
        'lessons.l14.title': '14. O outro caminho (else)',
        'lessons.l14.summary': 'Duas opções.',
        'lessons.l14.s1.body': 'Use <code>if/else</code> para tratar dois casos.',
        'lessons.l15.title': '15. Loops (for)',
        'lessons.l15.summary': 'Repetição real.',
        'lessons.l15.s1.body': 'Use um loop <code>for</code> para desenhar 5 caixas verdes.',
        'lessons.l16.title': '16. Padrões com Loops',
        'lessons.l16.summary': 'Gerando grades.',
        'lessons.l16.s1.body': 'Crie um quadrado 3x3 usando loops.',

        // Module 5
        'lessons.l17.title': '17. Suas próprias funções',
        'lessons.l17.summary': 'Reutilização.',
        'lessons.l17.s1.body': 'Crie uma função <code>drawRow</code> para desenhar 3 caixas.',
        'lessons.l18.title': '18. Parâmetros',
        'lessons.l18.summary': 'Funções flexíveis.',
        'lessons.l18.s1.body': 'Sua função deve aceitar uma <code>color</code> como argumento.',
        'lessons.l19.title': '19. Listas (Arrays)',
        'lessons.l19.summary': 'Escolha aleatória.',
        'lessons.l19.s1.body': 'Crie um array de cores e use <code>pickRandom</code>.',
        'lessons.l20.title': '20. Projeto Final',
        'lessons.l20.summary': 'Gerador de padrões.',
        'lessons.l20.s1.body': 'Crie um programa que pergunta uma cor e desenha um padrão com ela.'
    },
    'en-US': {
        'ui.run': 'Run',
        'ui.open': 'Open',
        'ui.save': 'Save',
        'ui.clean': 'Clear',
        'ui.lessons': 'Lessons',
        'ui.lesson': 'Lesson',
        'ui.previous': 'Previous',
        'ui.next': 'Next',
        'ui.savedScripts': 'Saved Scripts',
        'ui.filename': 'Filename',
        'ui.filenamePlaceholder': 'Type the filename here',
        'ui.savedFiles': 'Saved files:',
        'ui.cancel': 'Cancel',
        'ui.ok': 'Ok',
        'ui.errorTitle': 'Oops! Something went wrong.',
        'ui.errorFriendly': 'There was an error executing your code.',
        'ui.errorNotDefined': 'You used a name that does not exist: <strong>{name}</strong>. Check if you typed it correctly.',
        'ui.errorUnexpectedToken': 'It looks like there is a typo or a missing symbol (like a parenthesis or comma).',
        'ui.viewTechnical': 'View technical details',
        'ui.openFilePrompt': 'Filename to open: ',
        'ui.saveFilePrompt': 'Filename to save: ',
        'ui.untitled': 'Untitled',
        'validation.correctText': 'Correct text!',
        'validation.expected': 'Expected: "{value}"',
        'validation.drewBoxes': 'Drew {count} boxes.',
        'validation.expectedBoxes': 'Expected {count} {color} boxes, found {found}.',
        'validation.usedLoop': 'Used a loop!',
        'validation.tryLoop': 'Try using a "for" loop.',
        'validation.calledFunction': 'Called {name}.',
        'validation.needFunction': 'You need to call function {name}.',

        // Module 1
        'lessons.l01.title': '1. Welcome to Grasspuppy',
        'lessons.l01.summary': 'Meet the editor and the result pane.',
        'lessons.l01.s1.title': 'Your new playground',
        'lessons.l01.s1.body': 'In Grasspuppy, you write code on the left and see results on the right. The <b>Run</b> button makes the magic happen.',
        'lessons.l02.title': '2. Your first message',
        'lessons.l02.summary': 'Learn the print function.',
        'lessons.l02.s1.title': 'Text Output',
        'lessons.l02.s1.body': 'Use <code>print("text")</code> to show messages. Click Next to try!',
        'lessons.l02.s2.title': 'Print something',
        'lessons.l02.s2.body': 'Use the <code>print</code> function to show "Hello, Grasspuppy!".',
        'lessons.l03.title': '3. Your first box',
        'lessons.l03.summary': 'Draw something visual.',
        'lessons.l03.s1.body': 'Use <code>drawBox(red)</code> to draw a red square.',
        'lessons.l04.title': '4. Colors as values',
        'lessons.l04.summary': 'Use different arguments.',
        'lessons.l04.s1.body': 'Draw one red, one blue, and one green square.',

        // Module 2
        'lessons.l05.title': '5. Order of Commands',
        'lessons.l05.summary': 'Sequencing matters.',
        'lessons.l05.s1.body': 'Draw boxes in order: red, yellow, and blue.',
        'lessons.l06.title': '6. A row of boxes',
        'lessons.l06.summary': 'Manual repetition.',
        'lessons.l06.s1.body': 'Draw five blue boxes.',
        'lessons.l07.title': '7. New line',
        'lessons.l07.summary': 'Organize the layout.',
        'lessons.l07.s1.body': 'Draw 2 red on top and 2 blue below.',
        'lessons.l08.title': '8. Create a flag',
        'lessons.l08.summary': 'Visual composition.',
        'lessons.l08.s1.body': 'Create a 3x3 pattern: 3 red, 3 yellow, 3 blue.',

        // Module 3
        'lessons.l09.title': '9. Variables',
        'lessons.l09.summary': 'Store values for later.',
        'lessons.l09.s1.body': 'Use <code>let message = "Hi"</code> and then <code>print(message)</code>.',
        'lessons.l10.title': '10. Combining texts',
        'lessons.l10.summary': 'Concatenation.',
        'lessons.l10.s1.body': 'Combine a name variable with "Hello, ".',
        'lessons.l11.title': '11. Ask the user',
        'lessons.l11.summary': 'Input with readLine.',
        'lessons.l11.s1.body': 'Use <code>await readLine()</code> to ask for the user name.',
        'lessons.l12.title': '12. Numbers and Calculations',
        'lessons.l12.summary': 'Simple math.',
        'lessons.l12.s1.body': 'Calculate and print <code>3 + 4</code>.',

        // Module 4
        'lessons.l13.title': '13. Decisions (if)',
        'lessons.l13.summary': 'Conditional execution.',
        'lessons.l13.s1.body': 'Use <code>if</code> to print a message if <code>score > 5</code>.',
        'lessons.l14.title': '14. The other path (else)',
        'lessons.l14.summary': 'Two options.',
        'lessons.l14.s1.body': 'Use <code>if/else</code> to handle two cases.',
        'lessons.l15.title': '15. Loops (for)',
        'lessons.l15.summary': 'Real repetition.',
        'lessons.l15.s1.body': 'Use a <code>for</code> loop to draw 5 green boxes.',
        'lessons.l16.title': '16. Patterns with Loops',
        'lessons.l16.summary': 'Generating grids.',
        'lessons.l16.s1.body': 'Create a 3x3 square using loops.',

        // Module 5
        'lessons.l17.title': '17. Your own functions',
        'lessons.l17.summary': 'Reuse.',
        'lessons.l17.s1.body': 'Create a <code>drawRow</code> function to draw 3 boxes.',
        'lessons.l18.title': '18. Parameters',
        'lessons.l18.summary': 'Flexible functions.',
        'lessons.l18.s1.body': 'Your function should accept a <code>color</code> argument.',
        'lessons.l19.title': '19. Lists (Arrays)',
        'lessons.l19.summary': 'Random choice.',
        'lessons.l19.s1.body': 'Create a color array and use <code>pickRandom</code>.',
        'lessons.l20.title': '20. Final Project',
        'lessons.l20.summary': 'Pattern generator.',
        'lessons.l20.s1.body': 'Create a program that asks for a color and draws a pattern with it.'
    }
};

let currentLocale: Locale = 'en-US';

export function initI18n(): void {
    const saved = localStorage.getItem('prefs.locale') as Locale;
    if (saved && (saved === 'pt-BR' || saved === 'en-US')) {
        currentLocale = saved;
    } else {
        const sysLang = navigator.language;
        currentLocale = sysLang.startsWith('pt') ? 'pt-BR' : 'en-US';
    }
}

export function setLocale(locale: Locale): void {
    currentLocale = locale;
    localStorage.setItem('prefs.locale', locale);
}

export function getLocale(): Locale {
    return currentLocale;
}

export function t(key: string, params: Record<string, any> = {}): string {
    let text = translations[currentLocale][key] || key;
    Object.keys(params).forEach(p => {
        text = text.replace(`{${p}}`, params[p]);
    });
    return text;
}

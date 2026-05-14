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

        // Units
        'units.u1.name': 'Unidade 1: Primeiros Passos',
        'units.u1.desc': 'Conheça o editor e comandos básicos.',
        'units.u2.name': 'Unidade 2: Desenhos e Padrões',
        'units.u2.desc': 'Aprenda sequenciamento e composição visual.',
        'units.u3.name': 'Unidade 3: Variáveis e Texto',
        'units.u3.desc': 'Guarde e use informações em programas.',
        'units.u4.name': 'Unidade 4: Entrada e Decisões',
        'units.u4.desc': 'Interaja com o usuário e tome decisões.',
        'units.u5.name': 'Unidade 5: Loops e Repetição',
        'units.u5.desc': 'Gere padrões complexos automaticamente.',
        'units.u6.name': 'Unidade 6: Funções e Reuso',
        'units.u6.desc': 'Crie sua própria lógica reutilizável.',
        'units.u7.name': 'Unidade 7: Listas e Aleatoriedade',
        'units.u7.desc': 'Use arrays e escolhas randômicas.',
        'units.u8.name': 'Unidade 8: Depuração',
        'units.u8.desc': 'Aprenda a encontrar e corrigir erros.',
        'units.u9.name': 'Unidade 9: Projetos Criativos',
        'units.u9.desc': 'Combine tudo para criar seus projetos.',

        // Lessons Unit 1
        'lessons.u1l1.title': '1. Bem-vindo ao Grasspuppy',
        'lessons.u1l1.summary': 'Conheça o seu novo playground.',
        'lessons.u1l1.obj1': 'Identificar as partes da interface.',
        'lessons.u1l1.s1.title': 'O Editor e o Resultado',
        'lessons.u1l1.s1.body': 'No Grasspuppy, você escreve código à esquerda e vê o resultado à direita.',
        
        'lessons.u1l2.title': '2. Executando seu Programa',
        'lessons.u1l2.summary': 'Faça a mágica acontecer.',
        'lessons.u1l2.obj1': 'Aprender a executar o código.',
        'lessons.u1l2.s1.title': 'O Botão Executar',
        'lessons.u1l2.s1.body': 'Clique no botão <b>Executar</b> no topo para ver o código funcionar.',

        'lessons.u1l3.title': '3. O que são Funções',
        'lessons.u1l3.summary': 'Comandos que o computador entende.',
        'lessons.u1l3.obj1': 'Compreender o conceito de funções.',
        'lessons.u1l3.s1.title': 'Dando Ordens',
        'lessons.u1l3.s1.body': 'Funções são como verbos. Elas dizem ao computador para fazer algo específico.',

        'lessons.u1l4.title': '4. Imprimindo Texto',
        'lessons.u1l4.summary': 'Sua primeira mensagem.',
        'lessons.u1l4.obj1': 'Usar a função print.',
        'lessons.u1l4.s1.body': 'Use a função <code>print("Olá")</code> para mostrar uma mensagem.',

        'lessons.u1l5.title': '5. Ordem das Coisas',
        'lessons.u1l5.summary': 'O computador lê de cima para baixo.',
        'lessons.u1l5.s1.body': 'Quando você escreve várias linhas de código, o computador as executa na ordem em que aparecem. Tente imprimir duas mensagens diferentes!',

        'lessons.u1l6.title': '6. Sua Primeira Caixa',
        'lessons.u1l6.summary': 'Vamos desenhar algo!',
        'lessons.u1l6.s1.body': 'A função <code>drawBox(red)</code> desenha um pequeno quadrado vermelho no painel de resultados. É assim que começamos a criar coisas visuais!',

        'lessons.u1l7.title': '7. Mudando as Cores',
        'lessons.u1l7.summary': 'Experimente cores diferentes.',
        'lessons.u1l7.s1.body': 'Você pode usar cores diferentes como <code>blue</code>, <code>green</code> ou <code>yellow</code>. Tente desenhar uma caixa de cada cor!',

        'lessons.u1l8.title': '8. Entendendo Erros',
        'lessons.u1l8.summary': 'Erros são normais e ajudam a aprender.',
        'lessons.u1l8.s1.body': 'Programadores cometem erros o tempo todo! Se você escrever <code>prunt</code> em vez de <code>print</code>, o Grasspuppy vai te mostrar uma mensagem explicando o que aconteceu.',

        'lessons.u1l9.title': '9. O Detetive de Código',
        'lessons.u1l9.summary': 'Conserte o código quebrado.',
        'lessons.u1l9.s1.body': 'Às vezes o código tem um pequeno erro de digitação. Sua missão é encontrar e consertar para que o programa funcione novamente!',

        'lessons.u1l10.title': '10. Desafio: Linha Colorida',
        'lessons.u1l10.summary': 'Combine tudo o que aprendeu.',
        'lessons.u1l10.s1.body': 'Crie uma sequência de caixas coloridas! Tente usar pelo menos 3 cores diferentes para formar uma linha bonita.',

        // Lessons Unit 2
        'lessons.u2l11.title': '11. A Ordem do Desenho',
        'lessons.u2l11.summary': 'Desenhar também segue uma sequência.',
        'lessons.u2l11.s1.body': 'Assim como o texto, as caixas são desenhadas na ordem que você escreve. Desenhe uma caixa amarela e depois uma azul!',
        
        'lessons.u2l12.title': '12. Uma Fila de Caixas',
        'lessons.u2l12.summary': 'Crie uma sequência horizontal.',
        'lessons.u2l12.s1.body': 'Ao chamar <code>drawBox</code> várias vezes, elas ficam uma ao lado da outra. Desenhe 4 caixas vermelhas!',

        'lessons.u2l13.title': '13. Pulando Linha',
        'lessons.u2l13.summary': 'Aprenda a função newLine.',
        'lessons.u2l13.s1.body': 'Para começar a desenhar em uma nova linha, usamos <code>newLine()</code>. Tente desenhar uma caixa verde, pular a linha e desenhar outra verde!',

        'lessons.u2l14.title': '14. Linhas e Colunas',
        'lessons.u2l14.summary': 'Crie uma grade simples.',
        'lessons.u2l14.s1.body': 'Combinando caixas e quebras de linha, você cria formas! Faça duas linhas, cada uma com duas caixas azuis.',

        'lessons.u2l15.title': '15. Pintando uma Bandeira',
        'lessons.u2l15.summary': 'Composição visual.',
        'lessons.u2l15.s1.body': 'Crie uma bandeira com 3 listras horizontais: 3 verdes em cima, 3 amarelas no meio e 3 azuis embaixo.',

        'lessons.u2l16.title': '16. Simetria de Cores',
        'lessons.u2l16.summary': 'Crie padrões espelhados.',
        'lessons.u2l16.s1.body': 'Desenhe um padrão simétrico: Vermelho, Azul, Amarelo, Azul, Vermelho.',

        'lessons.u2l17.title': '17. Padrões Repetidos',
        'lessons.u2l17.summary': 'Crie sequências rítmicas.',
        'lessons.u2l17.s1.body': 'Crie uma linha alternando cores: Verde, Branco, Verde, Branco, Verde, Branco.',

        'lessons.u2l18.title': '18. Introdução ao Pixel Art',
        'lessons.u2l18.summary': 'Caixas são como pixels.',
        'lessons.u2l18.s1.body': 'Na computação, imagens são feitas de pequenos pontos chamados pixels. No Grasspuppy, nossas caixas são como pixels gigantes! Desenhe um pequeno "L" usando caixas.',

        'lessons.u2l19.title': '19. Desafio: O Distintivo',
        'lessons.u2l19.summary': 'Crie sua própria marca.',
        'lessons.u2l19.s1.body': 'Use sua criatividade! Desenhe um distintivo colorido que use pelo menos 3 linhas e use cores diferentes nas bordas.',

        'lessons.u2l20.title': '20. Mini Projeto: Poster Digital',
        'lessons.u2l20.summary': 'Crie uma obra de arte.',
        'lessons.u2l20.s1.body': 'Imagine que o painel é um poster. Use cores e quebras de linha para criar um desenho abstrato e dê um nome a ele usando a função <code>print</code> no final.',
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

        // Units
        'units.u1.name': 'Unit 1: Getting Started',
        'units.u1.desc': 'Meet the editor and basic commands.',
        'units.u2.name': 'Unit 2: Drawing and Patterns',
        'units.u2.desc': 'Learn sequencing and visual composition.',
        'units.u3.name': 'Unit 3: Variables and Text',
        'units.u3.desc': 'Store and use information in programs.',
        'units.u4.name': 'Unit 4: Input and Decisions',
        'units.u4.desc': 'Interact with users and make decisions.',
        'units.u5.name': 'Unit 5: Loops and Repetition',
        'units.u5.desc': 'Generate complex patterns automatically.',
        'units.u6.name': 'Unit 6: Functions and Reuse',
        'units.u6.desc': 'Create your own reusable logic.',
        'units.u7.name': 'Unit 7: Arrays and Randomness',
        'units.u7.desc': 'Use arrays and random choices.',
        'units.u8.name': 'Unit 8: Debugging',
        'units.u8.desc': 'Learn to find and fix errors.',
        'units.u9.name': 'Unit 9: Creative Projects',
        'units.u9.desc': 'Combine everything to create your own projects.',

        // Lessons Unit 1
        'lessons.u1l1.title': '1. Welcome to Grasspuppy',
        'lessons.u1l1.summary': 'Meet your new playground.',
        'lessons.u1l1.obj1': 'Identify interface parts.',
        'lessons.u1l1.s1.title': 'Editor and Results',
        'lessons.u1l1.s1.body': 'In Grasspuppy, you write code on the left and see results on the right.',
        
        'lessons.u1l2.title': '2. Running Your Program',
        'lessons.u1l2.summary': 'Make magic happen.',
        'lessons.u1l2.obj1': 'Learn how to execute code.',
        'lessons.u1l2.s1.title': 'The Run Button',
        'lessons.u1l2.s1.body': 'Click the <b>Run</b> button at the top to see your code in action.',

        'lessons.u1l3.title': '3. What are Functions',
        'lessons.u1l3.summary': 'Commands the computer understands.',
        'lessons.u1l3.obj1': 'Understand function concepts.',
        'lessons.u1l3.s1.title': 'Giving Orders',
        'lessons.u1l3.s1.body': 'Functions are like verbs. They tell the computer to do something specific.',

        'lessons.u1l4.title': '4. Printing Text',
        'lessons.u1l4.summary': 'Your first message.',
        'lessons.u1l4.obj1': 'Use the print function.',
        'lessons.u1l4.s1.body': 'Use the <code>print("Hello")</code> function to show a message.',

        'lessons.u1l5.title': '5. Order of Things',
        'lessons.u1l5.summary': 'The computer reads from top to bottom.',
        'lessons.u1l5.s1.body': 'When you write multiple lines of code, the computer executes them in the order they appear. Try printing two different messages!',

        'lessons.u1l6.title': '6. Your First Box',
        'lessons.u1l6.summary': 'Let\'s draw something!',
        'lessons.u1l6.s1.body': 'The function <code>drawBox(red)</code> draws a small red square in the result pane. This is how we start creating visual things!',

        'lessons.u1l7.title': '7. Changing Colors',
        'lessons.u1l7.summary': 'Experiment with different colors.',
        'lessons.u1l7.s1.body': 'You can use different colors like <code>blue</code>, <code>green</code>, or <code>yellow</code>. Try drawing one box of each color!',

        'lessons.u1l8.title': '8. Understanding Errors',
        'lessons.u1l8.summary': 'Errors are normal and help you learn.',
        'lessons.u1l8.s1.body': 'Programmers make mistakes all the time! If you type <code>prunt</code> instead of <code>print</code>, Grasspuppy will show you a message explaining what happened.',

        'lessons.u1l9.title': '9. Code Detective',
        'lessons.u1l9.summary': 'Fix the broken code.',
        'lessons.u1l9.s1.body': 'Sometimes code has a small typo. Your mission is to find and fix it so the program works again!',

        'lessons.u1l10.title': '10. Challenge: Colorful Row',
        'lessons.u1l10.summary': 'Combine everything you learned.',
        'lessons.u1l10.s1.body': 'Create a sequence of colorful boxes! Try using at least 3 different colors to form a nice row.',

        // Lessons Unit 2
        'lessons.u2l11.title': '11. Drawing Order',
        'lessons.u2l11.summary': 'Drawing also follows a sequence.',
        'lessons.u2l11.s1.body': 'Just like text, boxes are drawn in the order you write them. Draw a yellow box and then a blue one!',

        'lessons.u2l12.title': '12. A Row of Boxes',
        'lessons.u2l12.summary': 'Create a horizontal sequence.',
        'lessons.u2l12.s1.body': 'When you call <code>drawBox</code> multiple times, they stay side by side. Draw 4 red boxes!',

        'lessons.u2l13.title': '13. Skipping a Line',
        'lessons.u2l13.summary': 'Learn the newLine function.',
        'lessons.u2l13.s1.body': 'To start drawing on a new line, we use <code>newLine()</code>. Try drawing a green box, skipping the line, and drawing another green one!',

        'lessons.u2l14.title': '14. Rows and Columns',
        'lessons.u2l14.summary': 'Create a simple grid.',
        'lessons.u2l14.s1.body': 'By combining boxes and line breaks, you create shapes! Make two rows, each with two blue boxes.',

        'lessons.u2l15.title': '15. Painting a Flag',
        'lessons.u2l15.summary': 'Visual composition.',
        'lessons.u2l15.s1.body': 'Create a flag with 3 horizontal stripes: 3 green on top, 3 yellow in the middle, and 3 blue at the bottom.',

        'lessons.u2l16.title': '16. Color Symmetry',
        'lessons.u2l16.summary': 'Create mirrored patterns.',
        'lessons.u2l16.s1.body': 'Draw a symmetrical pattern: Red, Blue, Yellow, Blue, Red.',

        'lessons.u2l17.title': '17. Repeating Patterns',
        'lessons.u2l17.summary': 'Create rhythmic sequences.',
        'lessons.u2l17.s1.body': 'Create a row alternating colors: Green, White, Green, White, Green, White.',

        'lessons.u2l18.title': '18. Introduction to Pixel Art',
        'lessons.u2l18.summary': 'Boxes are like pixels.',
        'lessons.u2l18.s1.body': 'In computing, images are made of small dots called pixels. In Grasspuppy, our boxes are like giant pixels! Draw a small "L" using boxes.',

        'lessons.u2l19.title': '19. Challenge: The Badge',
        'lessons.u2l19.summary': 'Create your own brand.',
        'lessons.u2l19.s1.body': 'Use your creativity! Draw a colorful badge that uses at least 3 lines and use different colors on the edges.',

        'lessons.u2l20.title': '20. Mini Project: Digital Poster',
        'lessons.u2l20.summary': 'Create a work of art.',
        'lessons.u2l20.s1.body': 'Imagine the panel is a poster. Use colors and line breaks to create an abstract drawing and give it a name using the <code>print</code> function at the end.',
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

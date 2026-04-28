import * as monaco from 'monaco-editor';
import './library';
import { clearExecutionLog, getExecutionLog } from './library';
import { LessonManager } from './lessonManager';
import { Validator } from './validator';
import { initI18n, t, setLocale, getLocale, Locale } from './i18n';
import { getLessons } from './lessons';

initI18n();

const lessonManager = new LessonManager();
const validator = new Validator();

// Initialize lesson manager with the curriculum
lessonManager.setLessons(getLessons());

function updateStaticTranslations() {
    $('[data-i18n]').each(function() {
        const key = $(this).data('i18n');
        if (key) {
            if ($(this).is('input') || $(this).is('textarea')) {
                $(this).attr('placeholder', t(key));
            } else if ($(this).is('small') && $(this).attr('id') === 'filenameHelp') {
                $(this).text(t(key));
            } else {
                $(this).html(t(key));
            }
        }
    });
    $('#lang-select').val(getLocale());
}

function createDependencyProposals(range: monaco.IRange): monaco.languages.CompletionItem[] {
    const kind = monaco.languages.CompletionItemKind.Function;
    const insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;

    return [
        // Tier 1
        { label: 'drawBox', kind, documentation: 'Draw a box.', insertText: 'drawBox(${1:color})', range },
        { label: 'drawBoxes', kind, documentation: 'Draw boxes', insertText: 'drawBoxes(${1:string})', range },
        { label: 'print', kind, documentation: 'Print a string', insertText: 'print(${1:message})', range },
        { label: 'newLine', kind, documentation: 'New line', insertText: 'newLine()', insertTextRules, range },
        { label: 'pickRandom', kind, documentation: 'Pick a random element of an array', insertText: 'pickRandom(${1:array})', range },
        { label: 'readLine', kind, documentation: 'Read line from user (async)', insertText: 'readLine()', range },
        
        // Tier 2
        { label: 'repeat', kind, documentation: 'Repeat an action', insertText: 'repeat(${1:5}, (i) => {\n\t${0}\n})', insertTextRules, range },
        { label: 'pause', kind, documentation: 'Pause execution (async)', insertText: 'await pause(${1:1000})', range },
        { label: 'clearOutput', kind, documentation: 'Clear the result pane', insertText: 'clearOutput()', range },
        { label: 'setBoxSize', kind, documentation: 'Set box size in pixels', insertText: 'setBoxSize(${1:20})', range },
        { label: 'setGap', kind, documentation: 'Set gap between boxes', insertText: 'setGap(${1:2})', range },
        { label: 'drawGrid', kind, documentation: 'Draw a grid from an array of strings', insertText: 'drawGrid([${1}])', range },

        // Colors
        { label: 'color', kind: monaco.languages.CompletionItemKind.Variable, documentation: 'Array of colors', insertText: 'color', range },
        { label: 'white', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for white color', insertText: 'white', range },
        { label: 'black', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for black color', insertText: 'black', range },
        { label: 'red', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for red color', insertText: 'red', range },
        { label: 'green', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for green color', insertText: 'green', range },
        { label: 'blue', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for blue color', insertText: 'blue', range },
        { label: 'yellow', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for yellow color', insertText: 'yellow', range },
        { label: 'purple', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for purple color', insertText: 'purple', range },
        { label: 'orange', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for orange color', insertText: 'orange', range },
        { label: 'pink', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for pink color', insertText: 'pink', range },
        { label: 'gray', kind: monaco.languages.CompletionItemKind.Color, documentation: 'Constant for gray color', insertText: 'gray', range }
    ];
}

monaco.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems: (model, position) => {
        const word = model.getWordUntilPosition(position);
        const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
        };
        return {
            suggestions: createDependencyProposals(range)
        };
    }
});

function readFilename(text: string, value: string): Promise<string> {
    return new Promise((resolve) => {
        let okPressed = false;
        $('#filenameInput').val(value);
        $('#filenameInputLabel').text(text);
        
        const onOkClick = () => {
            okPressed = true;
            resolve($('#filenameInput').val() as string);
            $('#saved').modal('hide');
        };

        $('#savedOk').off('click').on('click', onOkClick);
        
        $('#saved').off('hidden.bs.modal').on('hidden.bs.modal', () => {
            if (!okPressed) resolve('');
        });

        let html = '';
        for (let i = 0; i < localStorage.length; ++i) {
            let k = localStorage.key(i);
            if (k && k.startsWith('arquivo.')) {
                const fileName = k.substring(8);
                html += `<a class="list-group-item list-group-item-action" id="list-arquivo${i}-list" data-toggle="list" href="#list-arquivo${i}" role="tab">${fileName}</a>`;
            }
        }
        $('#filesList').html(html);
        $('#filesList a').on('click', (e) => {
            $('#filenameInput').val($(e.target).text());
        });
        $('#saved').modal('show');
    });
}

const initialText = window.localStorage.getItem('initialText') || '';

const editor = monaco.editor.create(document.getElementById('content')!, {
    value: initialText,
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
});

function setValue(val: string) {
    editor.setValue(val);
    const result = document.getElementById('result');
    if (result) result.innerHTML = '';
}

function showError(error: any) {
    const errorPanel = $('#error-panel');
    const message = error.message || 'Erro desconhecido';
    const stack = error.stack || '';

    let friendlyMessage = t('ui.errorFriendly');
    if (message.includes('is not defined')) {
        const name = message.split(' ')[0];
        friendlyMessage = t('ui.errorNotDefined', { name });
    } else if (message.includes('Unexpected token')) {
        friendlyMessage = t('ui.errorUnexpectedToken');
    }

    $('#error-message').html(friendlyMessage);
    $('#error-details').text(`${message}\n\n${stack}`);
    errorPanel.show();
}

function setFocus(targets: { target: string, style: string }[]) {
    $('.highlight').removeClass('highlight');
    $('.pulse').removeClass('pulse');

    targets.forEach(f => {
        let el: JQuery;
        switch (f.target) {
            case 'editor': el = $('#content'); break;
            case 'resultPane': el = $('#result'); break;
            case 'runButton': el = $('#run'); break;
            default: el = $(f.target);
        }
        if (el.length) {
            el.addClass(f.style);
        }
    });
}

function renderStep() {
    const step = lessonManager.getCurrentStep();
    const lesson = lessonManager.getLesson();
    if (!step || !lesson) {
        showLessonList();
        return;
    }

    $('#back-to-list').show();
    $('#lesson-title').text(lesson.title);
    $('#step-title').text(step.title);
    $('#step-body').html(step.body);
    $('#step-progress').text(`${lessonManager.getStepIndex() + 1} / ${lesson.steps.length}`);
    $('#validation-feedback').empty();
    $('#error-panel').hide();

    if (step.starterCode !== undefined) {
        editor.setValue(step.starterCode);
    }

    if ((step as any).focus) {
        setFocus((step as any).focus);
    } else {
        setFocus([]);
    }
}

function showLessonList() {
    lessonManager.reset();
    const lessons = getLessons();
    let html = '<div class="list-group">';
    lessons.forEach(l => {
        html += `<a href="#" class="list-group-item list-group-item-action lesson-item" data-id="${l.id}">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">${l.title}</h6>
            </div>
            <p class="mb-1 small text-muted">${l.summary}</p>
        </a>`;
    });
    html += '</div>';

    const stepBody = $('#step-body');
    stepBody.html(html);
    $('#step-title').text(t('ui.lessons'));
    $('#lesson-title').text('Grasspuppy');
    $('#validation-feedback').empty();
    $('#step-progress').empty();
    $('#prev-step, #next-step').hide();
    $('#back-to-list').hide();

    $('.lesson-item').off('click').on('click', function(e) {
        e.preventDefault();
        const id = $(this).data('id');
        lessonManager.loadLessonById(id);
        $('#prev-step, #next-step').show();
        renderStep();
    });
}

document.getElementById('run')?.addEventListener('click', async () => {
    const editorVal = editor.getValue();
    const val = `(async function(){ 
        ${editorVal
            .replace(/readLine\(\)/g, 'await readLine()')
            .replace(/pause\(([^)]*)\)/g, 'await pause($1)')
            .replace(/repeat\(([^,]*),\s*async/g, 'await repeat($1, async')
            .replace(/repeat\(([^,]*),\s*\(/g, 'await repeat($1, (')
        } 
    })()`;
    
    const resultPane = document.getElementById('result');
    if (resultPane) resultPane.innerHTML = '';
    $('#error-panel').hide();
    
    clearExecutionLog();
    
    try {
        await eval(val);
        
        const step = lessonManager.getCurrentStep();
        if (step && step.type === 'task' && step.validation) {
            const results = validator.validate(getExecutionLog(), editorVal, step.validation.rules);
            const feedbackDiv = $('#validation-feedback');
            feedbackDiv.empty();
            
            results.forEach(res => {
                const alertClass = res.passed ? 'alert-success' : 'alert-danger';
                feedbackDiv.append(`<div class="alert ${alertClass} py-1 px-2 mb-1" style="font-size: 0.85rem;">${res.feedback}</div>`);
            });
        }
    } catch (e: any) {
        showError(e);
    }
});

document.getElementById('abrir')?.addEventListener('click', async () => {
    const arquivo = await readFilename(t('ui.openFilePrompt'), t('ui.untitled'));
    if (arquivo) {
        const val = window.localStorage.getItem('arquivo.' + arquivo);
        if (val !== null) setValue(val);
    }
});

document.getElementById('save')?.addEventListener('click', async () => {
    const val = editor.getValue();
    const value = await readFilename(t('ui.saveFilePrompt'), t('ui.untitled'));
    if (value) window.localStorage.setItem('arquivo.' + value, val);
});

document.getElementById('clean')?.addEventListener('click', () => {
    setValue('\n');
});

document.getElementById('toggle-lesson')?.addEventListener('click', () => {
    const panel = $('#lesson-panel');
    if (panel.is(':visible')) {
        panel.hide();
        setFocus([]);
    } else {
        panel.show();
        showLessonList();
    }
});

document.getElementById('back-to-list')?.addEventListener('click', () => {
    showLessonList();
});

document.getElementById('close-lesson')?.addEventListener('click', () => {
    $('#lesson-panel').hide();
    setFocus([]);
});

document.getElementById('next-step')?.addEventListener('click', () => {
    const status = lessonManager.nextStep();
    if (status === 'finished') {
        showLessonList();
    } else {
        renderStep();
    }
});

document.getElementById('prev-step')?.addEventListener('click', () => {
    if (lessonManager.previousStep()) {
        renderStep();
    }
});

document.getElementById('lang-select')?.addEventListener('change', (e) => {
    const newLocale = (e.target as HTMLSelectElement).value as Locale;
    setLocale(newLocale);
    updateStaticTranslations();
    
    // Refresh lessons data in manager
    const lessons = getLessons();
    lessonManager.setLessons(lessons);

    const lesson = lessonManager.getLesson();
    if (lesson) {
        // Just reload the current step to update text
        renderStep();
    } else if ($('#lesson-panel').is(':visible')) {
        showLessonList();
    }
});

window.onbeforeunload = () => {
    const val = editor.getValue();
    window.localStorage.setItem('initialText', val);
};

// Initial translation
updateStaticTranslations();

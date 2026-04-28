import { ExecutionEvent } from './library';
import { t } from './i18n';

export interface ValidationRule {
    type: string;
    value?: any;
    color?: string;
    count?: number;
    name?: string;
    pattern?: string;
    rows?: string[];
    onFail?: string;
    onPass?: string;
}

export interface ValidationResult {
    passed: boolean;
    feedback: string;
    ruleType: string;
}

export class Validator {
    validate(log: ExecutionEvent[], source: string, rules: ValidationRule[]): ValidationResult[] {
        return rules.map(rule => this.checkRule(log, source, rule));
    }

    private checkRule(log: ExecutionEvent[], source: string, rule: ValidationRule): ValidationResult {
        let passed = false;
        let defaultFeedback = '';

        switch (rule.type) {
            case 'printedTextEquals':
                const lastPrint = [...log].reverse().find(e => e.type === 'print');
                passed = lastPrint?.args.message === rule.value;
                defaultFeedback = passed ? t('validation.correctText') : t('validation.expected', { value: rule.value });
                break;

            case 'printedTextContains':
                passed = log.some(e => e.type === 'print' && String(e.args.message).includes(String(rule.value)));
                defaultFeedback = passed ? t('validation.correctText') : t('validation.expected', { value: rule.value });
                break;

            case 'printedTextExists':
                passed = log.some(e => e.type === 'print');
                defaultFeedback = passed ? t('validation.correctText') : 'Você precisa imprimir algo.';
                break;

            case 'boxColorCountEquals':
                const boxCount = log.filter(e => e.type === 'drawBox' && e.args.color === rule.color).length;
                passed = boxCount === rule.count;
                defaultFeedback = passed ? t('validation.drewBoxes', { count: rule.count }) : t('validation.expectedBoxes', { count: rule.count, color: rule.color, found: boxCount });
                break;

            case 'boxCountEquals':
                const totalBoxes = log.filter(e => e.type === 'drawBox').length;
                passed = totalBoxes === rule.count;
                defaultFeedback = passed ? `Desenhou ${totalBoxes} caixas.` : `Esperado ${rule.count} caixas, encontrou ${totalBoxes}.`;
                break;

            case 'boxCountAtLeast':
                const countAtLeast = log.filter(e => e.type === 'drawBox').length;
                passed = countAtLeast >= (rule.count || 1);
                defaultFeedback = passed ? `Desenhou caixas!` : `Desenhe pelo menos ${rule.count} caixas.`;
                break;

            case 'renderMatchesRows':
                // Check sequence of drawBox and newLine
                const rows: string[] = [];
                let currentRow = "";
                log.forEach(e => {
                    if (e.type === 'drawBox') {
                        // Simple mapping for pattern: first letter of color
                        currentRow += e.args.color[0];
                    } else if (e.type === 'newLine' || (e.type === 'print' && currentRow.length > 0)) {
                        if (currentRow.length > 0) rows.push(currentRow);
                        currentRow = "";
                    }
                });
                if (currentRow.length > 0) rows.push(currentRow);
                
                passed = JSON.stringify(rows) === JSON.stringify(rule.rows);
                defaultFeedback = passed ? "Padrão visual correto!" : "O desenho não corresponde ao esperado.";
                break;

            case 'usedForLoop':
                passed = /\bfor\s*\(/.test(source) || source.includes('.forEach') || log.some(e => e.type === 'repeat');
                defaultFeedback = passed ? t('validation.usedLoop') : t('validation.tryLoop');
                break;

            case 'usedIfStatement':
                passed = /\bif\s*\(/.test(source);
                defaultFeedback = passed ? "Usou decisão (if)!" : "Tente usar um 'if' para tomar uma decisão.";
                break;

            case 'usedElseStatement':
                passed = /\belse\b/.test(source);
                defaultFeedback = passed ? "Usou o 'else'!" : "Não esqueça de adicionar o 'else'.";
                break;

            case 'declaredVariable':
                passed = new RegExp(`\\b(let|const|var)\\s+${rule.name}\\b`).test(source);
                defaultFeedback = passed ? `Variável ${rule.name} declarada.` : `Declare uma variável chamada ${rule.name}.`;
                break;

            case 'declaredFunction':
                passed = new RegExp(`\\bfunction\\s+${rule.name}\\b`).test(source) || new RegExp(`\\bconst\\s+${rule.name}\\s*=\\s*\\(`).test(source);
                defaultFeedback = passed ? `Função ${rule.name} criada.` : `Crie uma função chamada ${rule.name}.`;
                break;

            case 'calledFunction':
                passed = log.some(e => e.type === rule.name);
                defaultFeedback = passed ? t('validation.calledFunction', { name: rule.name }) : t('validation.needFunction', { name: rule.name });
                break;

            case 'calledFunctionCount':
                const callCount = log.filter(e => e.type === rule.name).length;
                passed = callCount === rule.count;
                defaultFeedback = passed ? `Chamou ${rule.name} ${callCount} vezes.` : `Esperado ${rule.count} chamadas de ${rule.name}.`;
                break;

            case 'readLineCalled':
                passed = log.some(e => e.type === 'readLine');
                defaultFeedback = passed ? "Leu entrada do usuário." : "Você precisa usar readLine().";
                break;

            case 'readLineCountEquals':
                const rlCount = log.filter(e => e.type === 'readLine').length;
                passed = rlCount === rule.count;
                break;

            case 'usedArrayLiteral':
                passed = /\[.*\]/.test(source);
                defaultFeedback = passed ? "Usou um array!" : "Crie um array usando colchetes [ ].";
                break;

            default:
                defaultFeedback = `Regra desconhecida: ${rule.type}`;
        }

        return {
            passed,
            feedback: passed ? (rule.onPass || defaultFeedback) : (rule.onFail || defaultFeedback),
            ruleType: rule.type
        };
    }
}

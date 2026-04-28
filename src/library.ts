// Standard Colors
export const white = 'white';
export const black = 'black';
export const red = 'red';
export const green = 'green';
export const blue = 'blue';
export const yellow = 'yellow';
export const purple = 'purple';
export const orange = 'orange';
export const pink = 'pink';
export const gray = 'gray';

export const color: string[] = [white, black, red, green, blue, yellow, purple, orange, pink, gray];

for (let i = 0; i < 100; i++) {
	color.push('#' + 'ffffff'.replace(/./g, function () {
		const i = Math.floor(Math.random() * 16);
		return '0123456789abcdef'.substring(i, i + 1);
	}));
}

// State for Tier 2 customization
let boxSize = 20;
let boxGap = 2;

// Observability Contract
export interface ExecutionEvent {
    seq: number;
    type: string;
    args: any;
    timestamp: number;
    result?: any;
}

let executionLog: ExecutionEvent[] = [];
let nextSeq = 0;

export function clearExecutionLog(): void {
    executionLog = [];
    nextSeq = 0;
}

export function getExecutionLog(): ExecutionEvent[] {
    return [...executionLog];
}

function logEvent(type: string, args: any, result?: any): void {
	const event: ExecutionEvent = {
        seq: nextSeq++,
        type,
        args,
        timestamp: Date.now(),
        result
    };
	console.log(event);
    executionLog.push(event);
}

function _decodeColor(c: string): string {
	switch (c) {
		case 'b': return blue;
		case 'r': return red;
		case 'g': return green;
		case 'w': return white;
		case 'y': return yellow;
	}
	return c;
}

// --- Tier 1 API ---

export function drawBox(c: string): void {
    logEvent('drawBox', { color: c });
	const res = document.getElementById('result');
	if (!res) return;
	const span = document.createElement('span');
	span.className = 'box';
	span.style.backgroundColor = _decodeColor(c);
    span.style.width = `${boxSize}px`;
    span.style.height = `${boxSize}px`;
    span.style.marginRight = `${boxGap}px`;
	span.innerHTML = ' ';
	res.appendChild(span);
}

export function drawBoxes(s: string): void {
    logEvent('drawBoxes', { pattern: s });
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') newLine();
		else drawBox(s[i]);
	}
}

export function newLine(): void {
    logEvent('newLine', {});
	const res = document.getElementById('result');
	if (!res) return;
	const div = document.createElement('div');
	div.className = 'newline';
	div.innerHTML = ' ';
	res.appendChild(div);
}

export function print(s: any): void {
    logEvent('print', { message: s });
	const res = document.getElementById('result');
	if (!res) return;
	if (res.lastChild && (res.lastChild as HTMLElement).nodeName === 'SPAN') newLine();
	const div = document.createElement('div');
	div.className = 'newline';
	div.innerHTML = s + ' ';
	res.appendChild(div);
}

export function pickRandom<T>(a: T[]): T {
    const result = a[Math.floor(a.length * Math.random())];
    logEvent('pickRandom', { size: a.length }, result);
	return result;
}

export function readLine(): Promise<string> {
	return new Promise((resolve) => {
		const textId = 'input' + Math.floor(1000000000 * Math.random());
		const res = document.getElementById('result');
		if (!res) {
            resolve('');
            return;
        }
		const div = document.createElement('div');
		div.className = 'newLine';
		div.innerHTML = `<input type="text" id="${textId}">`;
		res.appendChild(div);
		const input = res.querySelector('input#' + textId) as HTMLInputElement;
		input.addEventListener('keypress', function (e: KeyboardEvent) {
			if (e.key === "Enter") {
				e.preventDefault();
				input.blur();
			}
		});
		input.addEventListener('focusout', function () {
            const value = this.value;
            logEvent('readLine', {}, value);
			resolve(value);
		});
		setTimeout(() => input.focus(), 1);
	});
}

// --- Tier 2 API ---

export async function repeat(count: number, callback: (i: number) => any): Promise<void> {
    logEvent('repeat', { count });
    for (let i = 0; i < count; i++) {
        const result = callback(i);
        if (result instanceof Promise) {
            await result;
        }
    }
}

export function pause(ms: number): Promise<void> {
    logEvent('pause', { ms });
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function clearOutput(): void {
    logEvent('clearOutput', {});
    const res = document.getElementById('result');
    if (res) res.innerHTML = '';
}

export function setBoxSize(size: number): void {
    logEvent('setBoxSize', { size });
    boxSize = size;
}

export function setGap(size: number): void {
    logEvent('setGap', { size });
    boxGap = size;
}

export function drawGrid(rows: string[]): void {
    logEvent('drawGrid', { rows });
    rows.forEach(row => {
        drawBoxes(row);
        newLine();
    });
}

// Attach to window for eval access
const globals: any = {
    drawBox, drawBoxes, newLine, print, pickRandom, readLine,
    repeat, pause, clearOutput, setBoxSize, setGap, drawGrid,
    white, black, red, green, blue, yellow, purple, orange, pink, gray, color,
    clearExecutionLog, getExecutionLog
};

Object.keys(globals).forEach(key => {
    (window as any)[key] = globals[key];
});

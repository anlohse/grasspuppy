import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null;

function createWindow(): void {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: { 
            nodeIntegration: true,
            contextIsolation: false,
        }
	});

	const filePath = path.join(__dirname, 'dist/index.html');
	mainWindow.loadFile(filePath);
	mainWindow.maximize();
	
    mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});

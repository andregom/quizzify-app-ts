// @ts-nocheck
import { BrowserWindow } from 'electron';
const path = require('path');
const childProcess = require('child_process');

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;
    static localBackendNodeProcess: ChildProcess;
    static Electronmon: any;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow = null;
    }

    private static SpwanChildProcess() {
        Main.localBackendNodeProcess = childProcess.fork(path.join(__dirname, 'NodeBcknd.js'), ['hello'], {
            silent: true,
            detached: true,
            stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
            env: {
                ELECTRON_RUN_AS_NODE:1
            }
          });
    }

    private static onReady() {
        Main.SpwanChildProcess();
        Main.mainWindow = new Main.BrowserWindow({
            backgroundColor: '#383838',
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            }
        });
        /* Main.bindWatchingProcess() */
        Main.mainWindow
            .loadURL('http://localhost:3000');
        Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow, electronmon: any) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}
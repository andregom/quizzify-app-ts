"use strict";
exports.__esModule = true;
var path = require('path');
var childProcess = require('child_process');
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    };
    Main.onClose = function () {
        // Dereference the window object. 
        Main.mainWindow = null;
    };
    Main.SpwanChildProcess = function () {
        Main.localBackendNodeProcess = childProcess.fork(path.join(__dirname, 'NodeBcknd.js'), ['hello'], {
            silent: true,
            detached: true,
            stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
            env: {
                ELECTRON_RUN_AS_NODE: 1
            }
        });
    };
    Main.onReady = function () {
        Main.SpwanChildProcess();
        Main.mainWindow = new Main.BrowserWindow({
            backgroundColor: '#383838',
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });
        /* Main.bindWatchingProcess() */
        Main.mainWindow
            .loadURL('http://localhost:3000');
        Main.mainWindow.on('closed', Main.onClose);
    };
    Main.main = function (app, browserWindow, electronmon) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    };
    return Main;
}());
exports["default"] = Main;

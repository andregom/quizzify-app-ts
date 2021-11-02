"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var childProcess = require('child_process');
var path = require('path');
var url = require("url");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== 'darwin') {
            Main.app.quit();
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
    Main.isAppRunningInDevMode = function () {
        var appIsNotPackaged = !Main.app.isPackaged;
        return appIsNotPackaged;
    };
    Main.setupLocalFilesNormalizerProxy = function () {
        electron_1.protocol.registerHttpProtocol("file", function (request, callback) {
            var url = request.url.substr(8);
            callback({ path: path.normalize(__dirname + "/" + url) });
        } /* ,
        (error: any): void => {
            if (error) console.error("Failed to register protocol");
        } */);
    };
    Main.onReady = function () {
        var isDev = Main.isAppRunningInDevMode();
        var customWidth = isDev ? 1200 : 800;
        Main.SpwanChildProcess();
        Main.setupLocalFilesNormalizerProxy();
        Main.mainWindow = new Main.BrowserWindow({
            backgroundColor: '#383838',
            width: customWidth,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, "preload.ts")
            }
        });
        var contentProviderPath = !isDev
            ? url.format({
                pathname: path.join(__dirname, "index.html"),
                protocol: "file:",
                slashes: true
            })
            : "http://localhost:3000";
        Main.mainWindow
            .loadURL(contentProviderPath);
        if (isDev) {
            Main.mainWindow.webContents.openDevTools();
        }
        Main.mainWindow.on('closed', Main.onClose);
    };
    Main.main = function (app, browserWindow, electronmon) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.app = app;
        Main.app.on('window-all-closed', Main.onWindowAllClosed);
        Main.app.on('ready', Main.onReady);
    };
    return Main;
}());
exports["default"] = Main;

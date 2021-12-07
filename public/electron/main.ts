import { BrowserWindow, protocol } from 'electron';
const childProcess = require('child_process');
const path = require('path');
const url = require("url");

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static app: Electron.App;
    static BrowserWindow;
    static localBackendNodeProcess: any;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.app.quit();
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

    private static isAppRunningInDevMode(): boolean {
        const appIsNotPackaged = !Main.app.isPackaged;
        return appIsNotPackaged;
    }

    private static setupLocalFilesNormalizerProxy() {
        protocol.registerHttpProtocol(
            "file",
            (request, callback) => {
                const url = request.url.substr(8);
                callback({ path: path.normalize(`${__dirname}/${url}`) });
            }/* ,
            (error: any): void => {
                if (error) console.error("Failed to register protocol");
            } */
        );
    }

    private static onReady() {
        const isDev = Main.isAppRunningInDevMode()
        const customWidth = isDev ? 1200 : 800
        Main.SpwanChildProcess();
        Main.setupLocalFilesNormalizerProxy();
        Main.mainWindow = new Main.BrowserWindow({
            backgroundColor: '#383838',
            width: customWidth,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, "preload.ts"),
            }
        });
        const contentProviderPath = !isDev
            ? url.format({
                pathname: path.join(__dirname, "../../", "build", "index.html"),
                protocol: "file:",
                slashes: true,
            })
            : "http://localhost:3000";
        Main.mainWindow
            .loadURL(contentProviderPath);

        if (isDev) {
            Main.mainWindow.webContents.openDevTools();
        }
        Main.mainWindow.on('closed', Main.onClose);
    }

    

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.app = app;
        Main.app.on('window-all-closed', Main.onWindowAllClosed);
        Main.app.on('ready', Main.onReady);
    }
}
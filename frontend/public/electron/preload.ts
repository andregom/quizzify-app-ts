const { contextBridge, ipcRenderer } = require("electron");

process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
  contextBridge.exposeInMainWorld("electronAPI", {
      loadPreferences: () => ipcRenderer.invoke('load-prefs')
  });
});
const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message: any) => electron.ipcRenderer.send('message-channel', message),
})
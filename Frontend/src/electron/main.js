import { app, BrowserWindow, ipcMain } from 'electron'; 

// app.on('ready', () => {
//     const mainWindow = new BrowserWindow({
//         webPreferences: {
//             devTools: true
//         }
//     })

//     mainWindow.loadFile('index.html')
// mainWindow.show()

// })

app.whenReady().then(createWindow)

function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js'),
    //   contextIsolation: true,
    //   enableRemoteModule: false,
    //   sandbox: true
    // }
  })

  mainWindow.loadFile('src/electron/index.html')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
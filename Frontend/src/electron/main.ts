import { app, BrowserWindow } from 'electron'
import path from 'path'

let env: any
app.whenReady().then(createWindow)

function createWindow() {
  env = process.env.NODE_ENV
  console.log(env)
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadFile(getUIPath())
}

function getUIPath() {
  return path.join(app.getAppPath(), '/dist/dist-angular/browser/index.html')
}

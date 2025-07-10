import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'
import { isDev } from '../../utils/is-development.js'
import { getUIPath } from '../../utils/path-resolver.js'

export default class Window {
  window: BrowserWindow

  constructor() {
    this.window = new BrowserWindow(this.setWindowSettings())
    this.setSourceFile()
    this.handleCloseEvents()
    this.setApplicationMenu()
    this.openDevTools()
  }

  setWindowSettings() {
    return {
      webPreferences: {
        preload: this.setPreloadFiles(),
        devTools: true
      },
      frame: true
    }
  }

  setPreloadFiles() {
    return path.join(
      app.getAppPath(),
      isDev() ? '.' : '..',
      '/dist-electron/preloads/preload.cjs'
    )
  }

  setSourceFile() {
    if (isDev()) this.window.loadURL('http://localhost:4200')
    else this.window.loadFile(getUIPath())
  }

  show() {
    this.window.show()
  }

  handleCloseEvents() {
    let willClose = false

    this.window.on('close', (e) => {
      if (willClose) return

      e.preventDefault()
      this.window.hide()
      if (app.dock) app.dock.hide()
    })

    app.on('before-quit', () => {
      willClose = true
    })

    this.window.on('show', () => {
      willClose = false
    })
  }

  setApplicationMenu() {
    Menu.setApplicationMenu(
      Menu.buildFromTemplate([
        {
          label: process.platform === 'darwin' ? undefined : 'App',
          type: 'submenu',
          submenu: [
            {
              label: 'Quit',
              click: app.quit
            },
            {
              label: 'DevTools',
              click: () => this.window.webContents.openDevTools(),
              visible: isDev()
            }
          ]
        }
        // {
        //   label: 'View',
        //   type: 'submenu',
        //   submenu: [
        //     {
        //       label: 'CPU',
        //       click: () =>
        //         ipcWebContentsSend('changeView', this.window.webContents, 'CPU')
        //     },
        //     {
        //       label: 'RAM',
        //       click: () =>
        //         ipcWebContentsSend('changeView', this.window.webContents, 'RAM')
        //     },
        //     {
        //       label: 'STORAGE',
        //       click: () =>
        //         ipcWebContentsSend(
        //           'changeView',
        //           this.window.webContents,
        //           'STORAGE'
        //         )
        //     }
        //   ]
        // }
      ])
    )
  }

  openDevTools() {
    if (isDev()) this.window.webContents.openDevTools()
  }
}

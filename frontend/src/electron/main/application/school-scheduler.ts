import { app, App, ipcMain } from 'electron'
import { lastValueFrom } from 'rxjs'
import HttpClient from '../client/http-client.js'
import Tray from '../tray/tray.js'
import Window from '../window/window.js'

export class SchoolScheduler {
  app: App
  window!: Window
  tray!: Tray

  constructor(private readonly httpClient: HttpClient) {
    this.app = app
    this.setApplicationDefaultActions()
  }

  setApplicationDefaultActions() {
    app.on('ready', () => {
      this.init()
      if (this.onReady !== undefined) this.onReady()
    })
  }

  init() {
    this.window = new Window()
  }

  onReady() {
    this.tray = new Tray(this)

    ipcMain.handle('get', async (event, { controller, params }) => {
      try {
        const response = await lastValueFrom(
          this.httpClient.get(controller, params)
        )
        return { success: true, data: response }
      } catch (error) {
        return { success: false, error: error }
      }
    })

    // pollResources(this.window.window)

    // ipcMainHandle('getStaticData', () => {
    //   return getStaticData()
    // })

    // ipcMainOn('sendFrameAction', (payload) => {
    //   switch (payload) {
    //     case 'CLOSE':
    //       this.window.window.close()
    //       break
    //     case 'MAXIMIZE':
    //       this.window.window.maximize()
    //       break
    //     case 'MINIMIZE':
    //       this.window.window.minimize()
    //       break
    //   }
    // })

    // createMenu(this.window.window)
  }
}

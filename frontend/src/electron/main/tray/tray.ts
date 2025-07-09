import electron, { Menu } from 'electron'
import path from 'path'
import { getAssetPath } from '../../utils/path-resolver.js'
import { SchoolScheduler } from '../application/school-scheduler.js'

export default class Tray {
  schoolScheduler: SchoolScheduler
  tray: electron.Tray
  constructor(app: SchoolScheduler) {
    this.schoolScheduler = app
    this.tray = new electron.Tray(path.join(getAssetPath(), this.icon()))
    this.setTrayMenu()
  }

  icon() {
    return process.platform === 'darwin'
      ? 'trayIconTemplate.png'
      : 'trayIcon.png'
  }

  setTrayMenu() {
    this.tray.setContextMenu(
      Menu.buildFromTemplate([
        {
          label: 'Show',
          click: () => {
            this.schoolScheduler.window.show()
            if (this.schoolScheduler.app.dock)
              this.schoolScheduler.app.dock.show()
          }
        },
        { label: 'Quit', click: () => this.schoolScheduler.app.quit() }
      ])
    )
  }
}

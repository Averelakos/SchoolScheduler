import electron, { App, Menu } from "electron";
import path from "path";
import { getAssetPath } from "../helpers/path-resolver.js";

export class Tray {

    app: App
    tray: electron.Tray
    constructor(app: App) {
        this.app = app
        this.tray = new electron.Tray(path.join(getAssetPath(), this.setTrayIcon()))
        this.tray.setContextMenu(this.setTrayMenu())
    }

    /**
     * Set correct icon for the tray
     * @returns icon name string
     */
    setTrayIcon() {
        return process.platform === 'darwin'? 'trayIconTemplate.png' : 'trayIcon.png'
    }

    /**
     * Return menu for the tray
     * @returns Menu array
     */
    setTrayMenu(): Menu {
        return Menu.buildFromTemplate([
            {label: 'Open School Scheduler', click: () => console.log('Open')},
            { type: 'separator' },
            { label: 'Quit', click: () => console.log('Quit') }
        ]) 
    }

}
import { BrowserWindow, ipcMain } from "electron";
import { getUIPath } from "../helpers/path-resolver.js";
import { isDev } from "../helpers/utils.js";

export default class MainWindow {
    window: BrowserWindow
    settings:any
    constructor(options: object){
        this.window = new BrowserWindow(options)
        this.loadURL(this.window)
        this.handleWindowEvents(this.window)
    }


    /**
     * Load the correct URL path to index.html
     * for the electron to load
     * @param mainWindow 
     */
    loadURL(mainWindow: BrowserWindow) {
       if (isDev())mainWindow.loadURL('http://localhost:4200')
       else mainWindow.loadFile(getUIPath())
    }


    handleWindowEvents(mainWindow: BrowserWindow) {
        

        // ipcMain.on('message-channel', (event, message) => {
        //     console.log('Received message from Angular:', message);
        // });
    }

    /**
     * Show window
     */
    show() {
        this.window.show()
    }
}
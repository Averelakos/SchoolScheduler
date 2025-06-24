import { app, App } from "electron";
import MainWindow from "../window/window.js";
import { getPreloadPath } from "../helpers/path-resolver.js";
import { Tray } from "../tray/tray.js";

export default class SchoolScheduler {
    app: App
    window!: MainWindow
    closed: boolean = false
    tray!: Tray
    instanceLock:boolean = false

    constructor(setting: object = {}){
        this.app = app
        this.instanceLock = app.requestSingleInstanceLock()

        if (!this.instanceLock) app.quit()
        else this.setAppOn()
        
        
    }

    setAppOn() {

        this.app.on('second-instance', () => {
            return this.focusMainWindow()
        })

        this.app.on('ready', () => {
            this.init()
            this.onReady()
        })

        this.app.on('activate', () => {
            return this.focusMainWindow()
        })

        // this.app.on('before-quit', () => {
        //     return (this.window.forceClose = true)
        // })
    }

    /**
     * Initialize the electron window
     */
    init() {
        this.window = new MainWindow({
            titleBarStyle: 'hiddenInset',
            name: 'Schoo Sceduler',
            width: null,
            height: null,
            devTools: true,
            webPreferences: {
                preload: getPreloadPath(),
            },
        })
    }

    /**
     * Actions to follow on app ready
     */
    onReady() {
        this.closed = false
        this.tray = new Tray(this.app)
    }

    focusMainWindow() {
        return this.window.show()
    }
}
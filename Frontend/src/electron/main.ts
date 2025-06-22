import {app, BrowserWindow} from 'electron'
import { isDev } from './utils.js'
import { getPreloadPath } from './path-resolver.js'

app.on('ready', () => {
   const mainWindow =  new BrowserWindow({
    webPreferences: {
            preload: getPreloadPath(),
        },
   })

   if (isDev())mainWindow.loadURL('http://localhost:4200')
})
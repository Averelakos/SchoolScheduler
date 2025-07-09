import { Observable } from 'rxjs'

const electron = require('electron')

// const api = {
//   get: (channel: string, arg: any) => invoke(channel, arg)
// }

electron.contextBridge.exposeInMainWorld('electron', {
  get: (controller: string, params: any) => ipcInvoke(controller, params)
} satisfies Window['electron'])

function ipcInvoke<T, F>(controller: string, params: T): Observable<F> {
  return electron.ipcRenderer.invoke('get', {
    controller: controller,
    params: params
  })
}

// function invoke(channel: string, arg: any): Promise<any> {
//   return electron.ipcRenderer.invoke(channel, arg)
// }

// electron.contextBridge.exposeInMainWorld('electron', {
//   subscribeStatistics: (callback) =>
//     ipcOn('statistics', (stats) => {
//       callback(stats)
//     }),
//   subscribeChangeView: (callback) =>
//     ipcOn('changeView', (view) => {
//       callback(view)
//     }),
//   getStaticData: () => ipcInvoke('getStaticData'),
//   sendFrameAction: (payload) => ipcSend('sendFrameAction', payload)
// } satisfies Window['electron'])

// function ipcInvoke<Key extends keyof EventPayloadMapping>(
//   key: Key
// ): Promise<EventPayloadMapping[Key]> {
//   return electron.ipcRenderer.invoke(key)
// }

// function ipcOn<Key extends keyof EventPayloadMapping>(
//   key: Key,
//   callback: (payload: EventPayloadMapping[Key]) => void
// ) {
//   const cb = (_: Electron.IpcRendererEvent, payload: any) => callback(payload)
//   electron.ipcRenderer.on(key, cb)
//   return () => electron.ipcRenderer.off(key, cb)
// }

// function ipcSend<Key extends keyof EventPayloadMapping>(
//   key: Key,
//   payload: EventPayloadMapping[Key]
// ) {
//   electron.ipcRenderer.send(key, payload)
// }

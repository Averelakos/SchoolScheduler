export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}

// export function ipcMainHandle<T extends keyof EventPayloadMapping>(
//   key: T,
//   handler: () => EventPayloadMapping[T]
// ) {
//   ipcMain.handle(key, (event) => {
//     validateEventFrame(event.senderFrame!)
//     return handler()
//   })
// }

// export function ipcMainOn<Key extends keyof EventPayloadMapping>(
//   key: Key,
//   handler: (payload: EventPayloadMapping[Key]) => void
// ) {
//   ipcMain.on(key, (event, payload) => {
//     validateEventFrame(event.senderFrame!)
//     return handler(payload)
//   })
// }

// export function ipcWebContentsSend<Key extends keyof EventPayloadMapping>(
//   key: Key,
//   webContents: WebContents,
//   payload: EventPayloadMapping[Key]
// ) {
//   webContents.send(key, payload)
// }

// export function validateEventFrame(frame: WebFrameMain) {
//   if (isDev() && new URL(frame.url).host === 'localhost:5123') {
//     return
//   }
//   if (frame.url !== pathToFileURL(getUIPath()).toString()) {
//     throw new Error('Malicious event')
//   }
// }

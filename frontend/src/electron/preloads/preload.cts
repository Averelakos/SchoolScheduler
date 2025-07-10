import { Observable } from 'rxjs'

const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
  get: (controller: string, params: any) =>
    ipcInvoke('get', controller, params),
  post: (controller: string, params: any) =>
    ipcInvoke('post', controller, params),
  patch: (controller: string, params: any) =>
    ipcInvoke('patch', controller, params),
  delete: (controller: string, params: any) =>
    ipcInvoke('delete', controller, params)
} satisfies Window['electron'])

function ipcInvoke<T, F>(
  action: string,
  controller: string,
  params: T
): Observable<F> {
  return electron.ipcRenderer.invoke(action, {
    controller: controller,
    params: params
  })
}

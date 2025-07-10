// declare global {
interface Window {
  electron: {
    get: <T, F>(controller: string, params?: T) => Observable<F>
    post: <T, F>(controller: string, params?: T) => Observable<F>
    patch: <T, F>(controller: string, params?: T) => Observable<F>
    delete: <T, F>(controller: string, params?: T) => Observable<F>
  }
}
// }

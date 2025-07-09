// declare global {
interface Window {
  electron: {
    get: <T, F>(controller: string, params?: T) => Observable<F>
  }
}
// }

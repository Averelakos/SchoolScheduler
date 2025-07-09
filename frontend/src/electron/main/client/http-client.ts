import axios from 'axios'
import { defer, Observable } from 'rxjs'

export default class HttpClient {
  baseUrl = 'http://localhost:5000'
  apiUrl = this.baseUrl + '/api/'

  public get<T, F>(controller: string, params?: T): Observable<F> {
    return defer(() => this.getCall<T, F>(controller, params))
  }

  private async getCall<T, F>(controller: string, params?: T): Promise<F> {
    return (
      await axios.get(this.apiUrl + controller, {
        params: params
        //   headers: { Accept: 'aplication/json' }
      })
    ).data
  }

  async post<T, F>(controller: string, params?: T): Promise<F> {
    return (
      await axios.post(this.apiUrl + controller, {
        params: params
        //   headers: { Accept: 'aplication/json' }
      })
    ).data
  }
}

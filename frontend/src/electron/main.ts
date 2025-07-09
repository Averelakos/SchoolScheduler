import { SchoolScheduler } from './main/application/school-scheduler.js'
import HttpClient from './main/client/http-client.js'

new SchoolScheduler(new HttpClient())

// const httpClient = new HttpClient()
// const hellosSub = httpClient.get('hello', null).subscribe({
//   next: (response) => console.log('Data received:', response),
//   error: (err) => console.error('Error:', err),
//   complete: () => {
//     console.log('Request completed')
//     closeSub()
//   }
// })

// function closeSub() {
//   hellosSub.unsubscribe()
//   console.log('request ended')
// }

import { SchoolScheduler } from './main/application/school-scheduler.js'
import HttpClient from './main/client/http-client.js'

new SchoolScheduler(new HttpClient())

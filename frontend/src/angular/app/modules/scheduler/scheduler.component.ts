import { Component } from '@angular/core'
import { from } from 'rxjs'

@Component({
  selector: 'scheduler',
  standalone: true,
  templateUrl: 'scheduler.component.html',
  styleUrl: 'scheduler.component.scss'
})
export class SchedulerComponent {
  // gethello() {
  //   let test = from(window.electron.get('hello'))
  //   test.subscribe((response) => console.log(response))
  //   // console.log(test)
  // }
}

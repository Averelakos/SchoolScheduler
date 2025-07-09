import { Component } from '@angular/core'
import { from } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<button (click)="gethello()">Test</button>',
  styles: ''
})
export class LayoutComponent {
  gethello() {
    let test = from(window.electron.get('hello'))
    test.subscribe((response) => console.log(response))
    // console.log(test)
  }
}

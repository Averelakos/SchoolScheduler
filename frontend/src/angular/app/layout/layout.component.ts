import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { from } from 'rxjs'

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'layout.component.html',
  styleUrl: 'layout.component.scss'
})
export class LayoutComponent {
  gethello() {
    let test = from(window.electron.get('hello'))
    test.subscribe((response) => console.log(response))
    // console.log(test)
  }
}

import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-icon',
  standalone: true,
  template: ` <i [class]="'ri-' + name + (filled ? '-fill' : '-line')"></i> `,
  styles: `
    :host {
      display: contents;
    }
  `
})
export class IconComponent {
  @Input() name: string = ''
  @Input() filled = false

  constructor() {
    console.log(this.name, this.filled)
  }
}

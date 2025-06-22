import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare global {
  interface Window {
  electronAPI: {
  sendMessage:
    (message : string) => void;
  }
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <h2>Iraklis Tsikas</h2>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'school-scheduler';
  sendMessage() { window.electronAPI.sendMessage("Hello from Angular!"); }
}

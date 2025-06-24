import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElectronService } from './core/services/electron.service';

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
  <button (click)="sendMessageToElectron()">Send Message</button>
    <h1>Welcome to {{title}}!</h1>
    <h2>Iraklis Tsikas</h2>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  // constructor(private _electronService: ElectronService){
  //   console.log(_electronService.isElectronApp)
  // }
  title = 'school-scheduler';
  sendMessageToElectron() {
    if (window.electronAPI) {
      window.electronAPI.sendMessage('Hello from Angular!');
    }
  }
}

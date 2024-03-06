import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  template: `<app-home></app-home>`,
})
export class AppComponent {
  title = 'angular-buzzfeed';
}

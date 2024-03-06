import { Component } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizzComponent],
  template: `
    <div class="container">
    <app-quizz></app-quizz>
    </div>
  `,
  styles: `
    .container {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }
  `
})
export class HomeComponent {

}

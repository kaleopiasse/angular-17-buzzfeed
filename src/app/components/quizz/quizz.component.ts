import { Component } from '@angular/core';
import { Quizz } from '../../types/quizz.type';
import QuestionsData from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  quizz: Quizz = QuestionsData;

  finished: boolean = false;

  questionIndex: number = 0;
  A = 0;
  B = 0;

  optionSelected(questionIndex: number, optionIndex: number) {

    this.quizz.questions[questionIndex].options[optionIndex].alias === 'A'
      ? this.A += 1 : this.B += 1;

    questionIndex < this.quizz.questions.length-1
      ? this.questionIndex += 1
      : this.finished = true;
  }

}

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  templateUrl: 'view-quizz.dialog.html',
})
export class NewQuizDialog {
  addQuizzForm!: FormGroup;
  optionsForm!: FormGroup;
  optionCorrectArray: boolean[] = [];

  constructor() {}
}

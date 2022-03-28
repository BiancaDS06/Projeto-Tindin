import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { QuizzService } from '../services/quiz-layout.service';

@Component({
  templateUrl: 'new-quizz.dialog.html',
  styleUrls: ['new-quizz.dialog.css'],
})
export class NewQuizDialog {
  addQuizzForm!: FormGroup;
  optionsForm!: FormGroup;
  optionCorrectArray: boolean[] = [];

  constructor(
    private quizzService: QuizzService,
    private formBuilder: FormBuilder
  ) {
    this.addQuizzForm = this.formBuilder.group({
      team: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      level: ['', Validators.required],
      type: ['', Validators.required],
      rewardXp: ['', Validators.required],
      options: [''],
    });

    this.optionsForm = this.formBuilder.group({
      optionA: [],
      optionB: [],
      optionC: [],
      optionD: [],
    });
  }

  addQuiz() {
    this.addQuizzForm.patchValue({
      options: this.setOptionsToQuestion(),
    });

    this.quizzService
      .postAddQuizz(this.addQuizzForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }

  changeCorrectValueOfOption(position: number, change: MatCheckboxChange) {
    this.optionCorrectArray[position] = change.checked;
  }

  private setOptionsToQuestion() {
    let options: { correct: boolean; text: string }[] = [];

    const values = Object.values(this.optionsForm.value);
    values.forEach((option: any, index: number) => {
      options.push({
        correct: this.optionCorrectArray[index] || false,
        text: option,
      });
    });
    return options;
  }
}

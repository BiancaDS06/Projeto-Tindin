import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { NewQuizDialog } from './dialogs/new-quizz.dialog';
import { QuizzModel } from './models/quizz.model';
import { QuizzService } from './services/quiz-layout.service';

@Component({
  selector: 'app-quiz-layout',
  templateUrl: './quiz-layout.component.html',
  styleUrls: ['./quiz-layout.component.css'],
})
export class QuizLayoutComponent implements OnInit {
  quizzes: QuizzModel[] = [] as QuizzModel[];
  quizz: any;
  constructor(private service: QuizzService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getQuizzes();
  }

  private getQuizzes() {
    this.service.getQuizzes().subscribe((response: any) => {
      this.quizzes = response;
    });
  }

  openAddQuizModal() {
    const dialogRef = this.dialog.open(NewQuizDialog, {
      width: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteQuizz(quizzToDelete: QuizzModel) {
    this.service
      .getQuizzById(quizzToDelete._id)
      .pipe(
        switchMap((response: any) => {
          return this.service.deleteQuizz(response);
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  editQuizz(quizzToDelete: QuizzModel) {
    this.service
      .getQuizzById(quizzToDelete._id)
      .pipe(
        switchMap((response: any) => {
          console.log(response);

          response.description = 'Editado sdasdasd';

          return this.service.editQuizz(response);
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  getQuizzById(idOfQuizz: string) {
    let quizz;
    this.service.getQuizzById(idOfQuizz).subscribe((response) => {
      quizz = response;
      this.quizz = response;
    });
    return quizz;
  }

  viewQuizz() {
    const dialogRef = this.dialog.open(NewQuizDialog, {
      width: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

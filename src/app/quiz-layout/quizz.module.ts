import { QuizzRoutingModule } from './quizz.routing.module';
import { QuizLayoutComponent } from './quiz-layout.component';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { QuizzService } from '../quiz-layout/services/quiz-layout.service';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NewQuizDialog } from './dialogs/new-quizz.dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  imports: [
    QuizzRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  declarations: [QuizLayoutComponent, NewQuizDialog],
  providers: [QuizzService],
  exports: [],
})
export class QuizModule {}

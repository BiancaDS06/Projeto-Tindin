import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuizzModel } from '../models/quizz.model';

@Injectable()
export class QuizzService {
  private API = environment.tinDinAPI;

  constructor(private http: HttpClient) {}

  postAddQuizz(newQuiz: QuizzModel) {
    return this.http.post(`${this.API}quizzes`, newQuiz);
  }

  getQuizzes() {
    return this.http
      .get(
        `${this.API}quizzes?filter=team:623497e07ccb72a54717b9f4&fields=name, description, level,rewardXp,type"`
      )
      .pipe(pluck('quizzes'));
  }

  putQuizz(quizz: QuizzModel) {
    return this.http.put(`${this.API}quizzes`, quizz);
  }

  deleteQuizz(quizz: any) {
    return this.http.put(`${this.API}quizzes`, quizz);
  }

  getQuizzById(id: string) {
    return this.http.get(`${this.API}quizzes/${id}`).pipe(pluck('quiz'));
  }

  editQuizz(quizz: any) {
    return this.http.put(`${this.API}quizzes`, quizz);
  }
}

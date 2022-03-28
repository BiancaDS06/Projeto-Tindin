import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login-tindin/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'quizz',
    loadChildren: () =>
      import('./quiz-layout/quizz.module').then((m) => m.QuizModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

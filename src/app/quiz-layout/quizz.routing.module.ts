import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../core/guards/authorize.guard';
import { QuizLayoutComponent } from './quiz-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthorizeGuard],
    component: QuizLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthorizeGuard],
  exports: [RouterModule],
})
export class QuizzRoutingModule {}

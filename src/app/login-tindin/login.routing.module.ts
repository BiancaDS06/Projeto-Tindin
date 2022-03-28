import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../core/guards/authorize.guard';
import { LoginTindinComponent } from './login-tindin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginTindinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

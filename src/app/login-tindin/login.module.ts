import { LoginTindinComponent } from './login-tindin.component';
import { LoginRoutingModule } from './login.routing.module';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginTindinComponent],
  exports: [],
  providers: [LoginService],
})
export class LoginModule {}

import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-tindin',
  templateUrl: './login-tindin.component.html',
  styleUrls: ['./login-tindin.component.css'],
})
export class LoginTindinComponent implements OnInit {
  loginForms!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForms = formBuilder.group({
      email: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')],
      password: ['', Validators.minLength(3)],
    });
  }

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.loginForms.value).subscribe((token: any) => {
      localStorage.setItem('accessToken', token);
      this.router.navigate(['/quizz']);
    });
  }
}

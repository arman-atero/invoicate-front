import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(val) {
    if (this.loginForm.valid) {
      const pass = val.controls['password'].value;
      const userName = val.controls['username'].value;
      console.log(val.value);
      this.router.navigate(['invoice/new']);
      this.authService.signInUser(pass, userName).subscribe(res => {
        localStorage.setItem('user', 'test');
        console.log(res);
        this.router.navigate(['invoice/new']);
      });
    }
  }
}

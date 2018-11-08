import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(val) {
    if (this.loginForm.valid) {
      let pass = val.controls['password'].value;
      let userName = val.controls['username'].value;
      console.log(val.value);
      localStorage.setItem('user', 'invToken')
      this.router.navigate(['invoice/new'])
      this.authService.signInUser(pass, userName).subscribe(res => {
        localStorage.setItem('user', '')
        console.log(res);
        this.router.navigate(['invoice/new'])
      })

    }
  }

}

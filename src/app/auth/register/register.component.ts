import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selected = 'selecte';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  regpass = false;
  endFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passConfirm: new FormControl('', [
        Validators.required,
        this.passValidator
      ]),
      pass: new FormControl('', [Validators.required])
    });

    this.secondFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      state: new FormControl(''),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      companyName: new FormControl(''),
      websiteUrl: new FormControl(''),
      taxIdNumber: new FormControl('')
    });

    this.endFormGroup = new FormGroup({
      businnesName: new FormControl('', Validators.required),
      vanityUrl: new FormControl('', Validators.required)
    });
  }

  passValidator = c => {
    if (this.firstFormGroup) {
      return this.firstFormGroup.controls['pass'].value ===
        this.firstFormGroup.controls['passConfirm'].value
        ? null
        : {
            passValidator: {
              valid: false
            }
          };
    }
  }

  registerForm(register) {
    if (this.firstFormGroup.valid) {
      const reg = register.controls['pass'].value;
      const pas = register.controls['passConfirm'].value;
      if (reg === pas) {
        console.log(reg + ' ' + pas);
      } else {
        console.log(register.value);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selected = 'select';
  states: string[] = [
    'Armenia',
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  generalForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  endFormGroup: FormGroup;
  emailExist = false;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.generalForm = new FormGroup({
      firstFormGroup: new FormGroup({
        emailAddress: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        passConfirm: new FormControl('', [
          Validators.required,
          this.passValidator
        ]),
        pass: new FormControl('', [Validators.required])
      }),
      secondFormGroup: new FormGroup({
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
      }),
      endFormGroup: new FormGroup({
        businnesName: new FormControl('', Validators.required),
        vanityUrl: new FormControl('', Validators.required)
      })
    });
  }
  registerUser(allPages) {
    console.log(allPages.value);
    this.authService.registration(allPages.value).subscribe(res => {
      console.log(res);
    });
  }

  checkEmail(email) {
    this.authService.confirmEmail(email).subscribe(res => {
      console.log(res);
      if (res) {
        this.generalForm
          .get('firstFormGroup.emailAddress')
          .setErrors({ incorrect: true });
        this.emailExist = true;
        console.log(email);
      }
    });
  }
  passValidator = c => {
    if (this.generalForm && this.generalForm.get('firstFormGroup')) {
      return this.generalForm.get('firstFormGroup.pass').value ===
        this.generalForm.get('firstFormGroup.passConfirm').value
        ? null
        : {
            passValidator: {
              valid: false
            }
          };
    }
  }

  verifyEmail(e) {
    console.log(e.value.emailAddress);
    const emailValidate = e.value.emailAddress;
    this.authService.verifyEmail(emailValidate).subscribe(res => {
      console.log(res);
    });
  }

  registerForm(register) {
    console.log(register);

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

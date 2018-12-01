import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  checked = 'individual';
  selected = 'volvo';
  public organisation = false;
  newClient: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewClientComponent>) {}

  ngOnInit() {
    this.newClient = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.email),
      phoneNumber: new FormControl(''),
      streetLine1: new FormControl('', Validators.required),
      streetLine2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required)
    });
  }
  sendNewClient(form) {
    if (this.newClient.valid) {
      console.log(form.value);
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}

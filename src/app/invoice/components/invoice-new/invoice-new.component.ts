import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NewClientComponent } from '../new-client/new-client.component';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { InvoiceService } from '../../../core/services/invoice.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class InvoiceNewComponent implements OnInit {
  date = new FormControl(Date());
  newInvoiceForm: FormGroup;
  public url = 'assets/img/invoicely-icon.png';
  items: FormArray;
  public selectedCurrency = 'USD';

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.newInvoiceForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      statmentNum: [''],
      currency: ['eur', Validators.required],
      language: ['en-uk', Validators.required],
      imgs: [''],
      clientname: ['', Validators.required],
      datepicker: ['', Validators.required],
      invoicedue: ['', Validators.required],
      purchase: [''],

      items: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      descriptions: [''],
      quantity: ['', Validators.required],
      rate: ['', Validators.required],
      amount: ['', Validators.required],
      datTime: [''],
      link: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  addItem(): void {
    this.items = this.newInvoiceForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  saveInvoice(f) {
    if (this.newInvoiceForm.valid) {
      console.log(f.value);
      this.invoiceService
        .saveInvoice(this.newInvoiceForm.value)
        .subscribe(invoice => {
          console.log(invoice);
        });
    }
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = e => {
        console.log(e);
        // this.url = e.target.result;
      };
    }
  }
  openNewClient() {
    this.dialog.open(NewClientComponent, {});
  }
  deleteItem(i) {
    this.items.removeAt(i);
  }
  stopPropagation(event) {
    event.stopPropagation();
  }
}

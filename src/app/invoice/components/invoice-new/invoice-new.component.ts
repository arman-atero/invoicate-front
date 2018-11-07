import { Component, OnInit } from '@angular/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InvoiceService} from '../../../core/services/invoice.service';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class InvoiceNewComponent implements OnInit {
  date = new FormControl(Date());
  newInvoiceForm: FormGroup;
  public url = 'assets/img/invoicely-icon.png';
  items: FormArray;
  public selectedCurrency = 'USD';

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.newInvoiceForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      statmentNum: [''],
      currency:    ['eur', Validators.required],
      language:    ['en-uk', Validators.required],
      imgs:        [''],
      clientname:  ['', Validators.required],
      datepicker:  ['', Validators.required],
      invoicedue:  ['', Validators.required],
      purchase:    [''],

      items: this.fb.array([ this.createItem() ]),
      // items: this.fb.array([ this.createLink() ])
    });

  }
  // createLink(): FormGroup {
  //   return this.fb.group({
  //     link:         ['', Validators.required],
  //     address:      ['', Validators.required],
  //   });
  // }
  createItem(): FormGroup {
    return this.fb.group({
      descriptions: [''],
      quantity:     ['', Validators.required],
      rate:         ['', Validators.required],
      amount:       ['', Validators.required],
      datTime:      [''],
      link:         ['', Validators.required],
      address:      ['', Validators.required],
      link:         ['', Validators.required],
      address:      ['', Validators.required],
    });
  }

  addItem(): void {
    this.items = this.newInvoiceForm.get('items') as FormArray;
    this.items.push(this.createItem());
   }
//   addLink(): void {
//     this.items = this.newInvoiceForm.get('items') as FormArray;
//     this.items.push(this.createLink());
// }
  saveInvoice(f) {
    console.log(f.value);
    if ( this.newInvoiceForm.valid) {
      this.invoiceService.saveInvoice(this.newInvoiceForm.value).subscribe( invoice => {
        console.log(invoice);
      });
    }

  }
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      };
    }
  }

  deleteItem(i) {
    // this.items = this.items as Array,;
    this.items.removeAt(i);
   }
  stopPropagation(event){
    event.stopPropagation();
  }
}
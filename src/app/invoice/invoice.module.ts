import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule
  ],
  declarations: [
    InvoicesComponent,
    InvoiceNewComponent,
  ]
})
export class InvoiceModule { }

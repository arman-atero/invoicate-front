import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoicesComponent} from './components/invoices/invoices.component';
import {InvoiceNewComponent} from './components/invoice-new/invoice-new.component';

const routes: Routes = [
  {
    path: '', component: InvoicesComponent
  },
  {
    path: 'new', component: InvoiceNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { SharedModule } from '../shared';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NewClientComponent } from './components/new-client/new-client.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [InvoicesComponent, InvoiceNewComponent, NewClientComponent],
  entryComponents: [NewClientComponent]
})
export class InvoiceModule {}

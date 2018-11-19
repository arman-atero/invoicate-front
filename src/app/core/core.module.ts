import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [InvoiceService, AuthService]
})
export class CoreModule {}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private http: HttpClient
  ) { }

  saveInvoice(invoice) {
    return this.http.post('http:sdfsdsdf/invoices', invoice);
  }

}

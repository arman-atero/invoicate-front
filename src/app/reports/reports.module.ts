import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule} from './reports-routing.module';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [
    ReportComponent,
  ]
})
export class ReportsModule { }

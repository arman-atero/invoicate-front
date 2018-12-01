import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatCheckboxModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDatepickerModule,
    FlexLayoutModule,
    RouterModule,
    MatTooltipModule,
    MomentModule,
    MatCheckboxModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDatepickerModule,
    FlexLayoutModule,
    RouterModule,
    MatTooltipModule,
    MomentModule,
    MatCheckboxModule
  ]
})

export class SharedModule { }

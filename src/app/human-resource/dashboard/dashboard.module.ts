import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    DataTablesModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaStatusComponent } from './visa-status/visa-status.component';
import { VisaStatusRoutingModule } from './visa-status-routing.module';



@NgModule({
  declarations: [VisaStatusComponent],
  imports: [
    VisaStatusRoutingModule,
    CommonModule
  ]
})
export class VisaStatusModule { }

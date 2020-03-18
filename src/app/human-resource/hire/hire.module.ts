import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireComponent } from './hire/hire.component';
import { HireRoutingModule } from './hire-routing.module';



@NgModule({
  declarations: [HireComponent],
  imports: [
    HireRoutingModule,
    CommonModule
  ]
})
export class HireModule { }

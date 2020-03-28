import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireComponent } from './hire/hire.component';
import { HireRoutingModule } from './hire-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HireComponent],
  imports: [
    HireRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class HireModule { }

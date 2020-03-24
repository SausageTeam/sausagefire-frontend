import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  
  imports: [
    HumanResourceRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class HumanResourceModule { }

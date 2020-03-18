import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingComponent } from './housing/housing.component';
import { HousingRoutingModule } from './housing-routing.module';



@NgModule({
  declarations: [HousingComponent],
  imports: [
    HousingRoutingModule,
    CommonModule
  ]
})
export class HousingModule { }

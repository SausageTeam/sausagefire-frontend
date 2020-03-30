import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HousingRoutingModule } from './housing-routing.module';
import { HousingComponent } from './housing/housing.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    HousingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    HousingComponent
  ],
})
export class HousingModule { }

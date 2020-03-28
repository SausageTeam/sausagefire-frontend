import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

const personalProfileRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: PersonalProfileComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(personalProfileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalProfileRoutingModule { }
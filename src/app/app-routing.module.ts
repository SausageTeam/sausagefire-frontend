import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './_common/_service/app/auth-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    children : [
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'hr',
        loadChildren: () => import('./human-resource/human-resource.module').then(m => m.HumanResourceModule)
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Injectable()
export class AuthGuardService implements CanActivateChild {

  constructor(
    private http: HttpClient,
    private router: Router,
    private appService : AppService
  ) {}

  canActivateChild(route : ActivatedRouteSnapshot): boolean {
    console.log('canActivateChild on '+route.url);

    // console.log(this.appService.roleId);
    
    // console.
    // const roleId = localStorage.getItem('roleId');
    // const onboardingStatus = localStorage.getItem('onboardingStatus');
    // const ifNeedVisa = localStorage.getItem('ifNeedVisa');

    // const roleId = headers.get('roleid');
    // const onboardingStatus = res.headers.get('onboardingstatus');
    // const ifNeedVisa = res.headers.get('ifneedvisa');

    // console.log(roleId);
    // console.log(onboardingStatus);
    // console.log(ifNeedVisa);
    // console.log(this.auth);

    return true;
    
  }
}

// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { AuthResponse } from '../../_domain/app/app-response.model';

// @Injectable()
// export class AuthGuardService implements CanActivate {

//   constructor(
//     private http: HttpClient,
//     private router: Router
//   ) {}

//   canActivate(): Observable<boolean> {

//     return this.http.get('http://localhost:4200/api/app/auth/').map(
//       (res: AuthResponse) => {
//         console.log("guard");
//         console.log(res);

//         if(!res.serviceStatus.success && res.serviceStatus.statusCode === "401") {
//           window.location.href = res.redirectUrl + "?redirect=" + window.location.href;
//           return false;
//         } else if(res.auth.roleId === 1) {
//           this.router.navigate(['/hr/dashboard']);
//           return false;
//         }
//         return true;
//       }
//     );
    
//   }
// }
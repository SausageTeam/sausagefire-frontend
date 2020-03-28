import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../../_domain/app/app-response.model';
import { Auth } from '../../_domain/app/auth.module';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  auth : Auth = new Auth();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

    return this.http.get('http://localhost:4200/api/app/auth/').map(
      (res: AuthResponse) => {
        // console.log("guard");
        // console.log(res);
        if(!res.serviceStatus.success && res.serviceStatus.statusCode === "401") {
          window.location.href = res.redirectUrl + "?redirect=" + window.location.href;
          return false;
        }

        console.log('canActivate on '+route.url);
        this.auth = res.auth;
        // if(res.auth.roleId === 1) {
        //   console.log("1");
        //   // this.router.navigate(['hr']);
        // } else {
        //   console.log("2");
        //   // if(res.auth.onboardingStatus !== 2) {
        //   //   this.router.navigate(['/employee/onboarding/person']);
        //   // } else {
        //   //   this.router.navigate(['/employee/dashboard']);
        //   // }
        // }
        return true;
      }
    );
    
  }

  // canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    console.log('canActivateChild on '+route.url);

    // console.log(this.auth);
    if(this.auth.roleId !== 1) {
      return false;
    }

    return true;
    // return this.http.get('http://localhost:4200/api/app/auth/').map(
    //   (res: AuthResponse) => {
    //     // console.log("guard");
    //     // console.log(res);
    //     if(!res.serviceStatus.success && res.serviceStatus.statusCode === "401") {
    //       window.location.href = res.redirectUrl + "?redirect=" + window.location.href;
    //       return false;
    //     }

        // console.log('canActivate on '+route.url);
        // if(res.auth.roleId === 1) {
        //   this.router.navigate(['/hr/dashboard']);

        // } else {
        //   console.log("2");
        //   // if(res.auth.onboardingStatus !== 2) {
        //   //   this.router.navigate(['/employee/onboarding/person']);
        //   // } else {
        //   //   this.router.navigate(['/employee/dashboard']);
        //   // }
        // }
    //     return true;
    //   }
    // );
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
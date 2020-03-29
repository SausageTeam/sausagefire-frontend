import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../../_domain/app/app-response.model';
import { Auth } from '../../_domain/app/auth.module';
import { AppService } from './app.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  auth : Auth = new Auth();

  constructor(
    private http: HttpClient,
    private router: Router,
    private appService : AppService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // read from header
    console.log("guard");

    return true;
  
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    console.log('canActivateChild on '+route.url);

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
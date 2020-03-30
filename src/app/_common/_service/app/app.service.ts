import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { NavResponse } from '../../_domain/app/app-response.module';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { tap, delay, map, take } from 'rxjs/operators';
import { Auth } from '../../_domain/app/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authSubject : BehaviorSubject<Auth>;
  auth : Observable<Auth>;

  constructor(private http: HttpClient) {
    this.authSubject = new BehaviorSubject<Auth>(null);
    this.auth = this.authSubject.asObservable();
  }

  public get currentAuth(): Auth {
    return this.authSubject.value;
  }

  setCurrentAuth(auth: Auth): void {
    this.authSubject.next(auth);
  }

  getAvatarService() {
    return this.http.get('http://localhost:4200/api/app/nav/',
      { 
        observe: 'response'
      }
    ).map(
      (res: HttpResponse<NavResponse>) => {
        // console.log('get');
        // console.log(res);
        return res;
      }
    );
  };

  getAuthService() {
    return this.http.get('http://localhost:4200/api/app/auth/', 
      { 
        responseType: 'text',
        observe: 'response'
      }
    ).pipe(
      map(
        (res) => {
          const roleId = res.headers.get('roleid');
          const onboardingStatus = res.headers.get('onboardingstatus');
          const ifNeedVisa = res.headers.get('ifneedvisa');

          let currentAuth = new Auth();
          currentAuth.roleId = roleId;
          currentAuth.onboardingStatus = onboardingStatus;
          currentAuth.ifNeedVisa = ifNeedVisa;

          this.authSubject.next(currentAuth);
          return res;
        }
      )
    );
  }

}
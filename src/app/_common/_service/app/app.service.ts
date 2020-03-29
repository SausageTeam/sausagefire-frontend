import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { NavResponse, AuthResponse } from '../../_domain/app/app-response.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAvatarService() {
    return this.http.get('http://localhost:4200/api/app/nav/').map((res: NavResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  };

  getAuthService() {
    return this.http.get('http://localhost:4200/api/app/auth/').map((res: AuthResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

}
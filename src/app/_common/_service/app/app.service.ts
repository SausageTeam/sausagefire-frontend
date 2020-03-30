import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { NavResponse } from '../../_domain/app/app-response.model';
import { BehaviorSubject, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  roleId: string;

  constructor(private http: HttpClient) { }

  getAvatarService() {
    return this.http.get('http://localhost:4200/api/app/nav/',
      { 
        observe: 'response'
      }
    ).map(
      (res: HttpResponse<NavResponse>) => {
        // console.log("get");
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
    ).map(
      (res) => {
        return res;
      }
    );
  }

}
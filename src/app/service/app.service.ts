import { Injectable } from '@angular/core';
import { AppResponse } from '../domain/app/app-response.model';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAvatarService() {
    return this.http.get('http://localhost:4200/api/app/avatar').map((res: AppResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    })
  };
}
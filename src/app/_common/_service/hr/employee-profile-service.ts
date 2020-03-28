import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { EmployeeProfileResponse } from '../../_domain/hr/employee-profile/employee-profile-response.module';

@Injectable({
    providedIn: 'root'
  })
  export class EmployeeProfileService {
    constructor(private http: HttpClient) { }

    getEmployeeProfileService() {
        return this.http.get('http://localhost:4200/api/hr/employee-profile/').map((res: EmployeeProfileResponse) => {
          // console.log("get");
          // console.log(res);
          return res;
        })
      };

  }
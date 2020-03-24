import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { EmployeeProfile } from '../domain/hr/employee-profile/employee-profile.module';
import { EmployeeProfileResponse } from '../domain/hr/employee-profile/employee-profile-response.module';

@Injectable({
    providedIn: 'root'
  })
  export class EmployeeProfileService {
    constructor(private http: HttpClient) { }

    getEmployeeProfileService(employeeProfile: EmployeeProfile) {
        return this.http.get('http://localhost:4200/api/hr/employee-profile/').map((res: EmployeeProfileResponse) => {
          // console.log("get");
          // console.log(res);
          return res;
        })
      };
    
      postEmployeeProfileService(employeeProfile: EmployeeProfile) {
        return this.http.post('http://localhost:4200/api/hr/employee-profile/', { employeeProfile }).map((res: EmployeeProfileResponse) => {
          // console.log("post");
          // console.log(res);
          return res;
        })
      };

  }
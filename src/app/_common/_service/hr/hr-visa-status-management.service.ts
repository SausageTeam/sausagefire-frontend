import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { VisaStatusManagementResponse } from '../../_domain/employee/visaStatusManagement/visa-status-management-response.module';
import { VisaStatusManagement } from '../../_domain/employee/visaStatusManagement/visa-status-management.module';

@Injectable({
    providedIn: 'root'
  })
  export class HRVisaStatusManagementService {
    constructor(private http: HttpClient) { }

    getHRVisaStatusManagementService() {
        return this.http.get('http://localhost:4200/api/hr/visa-status-management/').map((res: VisaStatusManagementResponse) => {
          // console.log("get");
          // console.log(res);
          return res;
        })
      };
    
      postHRVisaStatusManagementService(visaStatusManagement: VisaStatusManagement) {
        return this.http.post('http://localhost:4200/api/hr/visa-status-management/', { visaStatusManagement }).map((res: VisaStatusManagementResponse) => {
          // console.log("post");
          // console.log(res);
          return res;
        })
      };
}
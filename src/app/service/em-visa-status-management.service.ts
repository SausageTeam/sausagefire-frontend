import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { VisaStatusManagementResponse } from "src/app/domain/employee/visaStatusManagement/visa-status-management-response.module";
import { VisaStatusManagement } from "src/app/domain/employee/visaStatusManagement/visa-status-management.module";

@Injectable({
    providedIn: 'root'
  })
  export class EMVisaStatusManagementService {
    constructor(private http: HttpClient) { }

    getEMVisaStatusManagementService(visaStatusManagement: VisaStatusManagement) {
        return this.http.get('http://localhost:4200/api/employee/visa-status-management/').map((res: VisaStatusManagementResponse) => {
          // console.log("get");
          // console.log(res);
          return res;
        })
      };
    
      postEMVisaStatusManagementService(visaStatusManagement: VisaStatusManagement) {
        return this.http.post('http://localhost:4200/api/employee/visa-status-management/', { visaStatusManagement }).map((res: VisaStatusManagementResponse) => {
          // console.log("post");
          // console.log(res);
          return res;
        })
      };
}
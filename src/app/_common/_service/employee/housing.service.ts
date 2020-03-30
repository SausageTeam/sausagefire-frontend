import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { HousingDetailResponse, FacilityReportsResponse, FacilityReportsRecordGetResponse } from '../../_domain/employee/housing/housing-response.module';
import { FacilityReportsIssue } from '../../_domain/employee/housing/facility-reports-issue.module';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getHousingDetailService() {
    return this.http.get('http://localhost:4200/api/employee/housing/house-detail/').map((res: HousingDetailResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

  

  postFacilityReportService(facilityReportsIssue : FacilityReportsIssue) {
    return this.http.post('http://localhost:4200/api/employee/housing/facility-reports/issue/', { facilityReportsIssue }).map((res: FacilityReportsResponse) => {
      // console.log("post");
      // console.log(res);
      return res;
    });
  }

  getFacilityRecordService() {
    return this.http.get('http://localhost:4200/api/employee/housing/facility-reports/record/').map((res: FacilityReportsRecordGetResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }
}

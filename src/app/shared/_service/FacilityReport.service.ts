import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { FacilityReport } from 'src/app/domain/facilityReport.module';
import { FacilityReportResponse } from '../domain/FacilityReportResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityReportService {

  constructor(private http: HttpClient) { }

  postFacilityReportService(facilityReport : FacilityReport) {
    return this.http.post('http://localhost:4200/api/employee/housing/facilityReport/', { facilityReport }).map((res: FacilityReportResponse) => {
      console.log("post");
      console.log(res);
      return res;
    })
  };
}

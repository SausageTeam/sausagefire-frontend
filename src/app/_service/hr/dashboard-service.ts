import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Dashboard } from "src/app/_domain/hr/dashboard/dashboard.module";
import { DashboardResponse } from '../../_domain/hr/dashboard/dashboard-response.module';

@Injectable({
    providedIn: 'root'
  })
  export class DashboardService {
    constructor(private http: HttpClient) { }

    getDashboardnService(dashboard: Dashboard) {
        return this.http.get('http://localhost:4200/api/hr/dashboard/').map((res: DashboardResponse) => {
          // console.log("get");
          // console.log(res);
          return res;
        })
      };
    
      postDashboardService(dashboard: Dashboard) {
        return this.http.post('http://localhost:4200/api/hr/dashboard/', { dashboard }).map((res: DashboardResponse) => {
          // console.log("post");
          // console.log(res);
          return res;
        })
      };

  }
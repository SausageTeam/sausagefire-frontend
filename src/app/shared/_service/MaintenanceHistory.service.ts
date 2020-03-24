import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { MaintenanceHistory } from 'src/app/domain/MaintenanceHistory.module';
import { MaintenanceHistoryResponse} from 'src/app/shared/domain/MaintenanceHistoryResponse.model';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceHistoryService {

  constructor(private http: HttpClient) { }

  getMaintenanceHistoryService(maintenanceHistoryList : MaintenanceHistory[]) {
    return this.http.post('http://localhost:4200/api/employee/housing/maintenanceHistory/', { maintenanceHistoryList }).map((res: MaintenanceHistoryResponse) => {
      console.log("post");
      console.log(res);
      return res;
    })
  };
}

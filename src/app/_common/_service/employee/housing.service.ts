import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { HousingDetailResponse } from '../../_domain/employee/housing/housing-response.module';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getHousingDetailService() {
    return this.http.get('http://localhost:4200/api/employee/housing/house-detail/').map((res: HousingDetailResponse) => {
      console.log("get");
      console.log(res);
      return res;
    })
  }

  
}

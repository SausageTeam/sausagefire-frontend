import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { HousingInfo } from 'src/app/domain/housingInfo.module';
import { HousingInfoResponse} from 'src/app/shared/domain/HousingInfoResponse.model';

@Injectable({
  providedIn: 'root'
})
export class HousingInfoService {

  constructor(private http: HttpClient) { }

  getHousingInfoService(housingInfo : HousingInfo) {
    return this.http.post('http://localhost:4200/api/employee/housing/housingInfo/', { housingInfo }).map((res: HousingInfoResponse) => {
      console.log("post");
      console.log(res);
      return res;
    })
  }

  
}

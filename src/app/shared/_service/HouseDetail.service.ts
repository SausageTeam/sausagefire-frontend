import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { AllHousesDetails } from 'src/app/domain/hr/house-management/allHousesDetails.module';
import { AllHousesDetailsResponse } from '../domain/AllHousesDetailsResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AllHousesDetailsService {

  constructor(private http: HttpClient) { }

//   getHouseDetailsService(allHousesDetailsList : AllHousesDetails[]) {
//     return this.http.get('http://localhost:4200/api/hr/housing/house/', id).map((res: HouseDetailsResponse) => {
//       console.log("get");
//       console.log(res);
//       return res;
//     })
//   };
}

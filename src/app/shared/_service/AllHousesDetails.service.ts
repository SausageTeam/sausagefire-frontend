import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { AllHousesDetails } from 'src/app/domain/allHousesDetails.module';
import { AllHousesDetailsResponse } from '../domain/AllHousesDetailsResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AllHousesDetailsService {

  constructor(private http: HttpClient) { }

  getAllHousesDetailsService(allHousesDetailsList : AllHousesDetails[]) {
    return this.http.get('http://localhost:4200/api/hr/housing/allHousesDetails/').map((res: AllHousesDetailsResponse) => {
      console.log("get");
      console.log(res);
      return res;
    })
  };
}

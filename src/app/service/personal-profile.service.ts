import { Injectable } from '@angular/core';
import { AppResponse } from '../domain/app/app-response.model';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { ProfileNameResponse, ProfileAddressResponse, ProfileContactResponse, ProfileEmploymentResponse, ProfileEmergencyContactResponse, ProfileDocumentResponse } from '../domain/employee/profile/profile-response.module';

@Injectable({
  providedIn: 'root'
})
export class PersonalProfileService {

  constructor(private http: HttpClient) { }

  getNameService() {
    return this.http.get('http://localhost:4200/api/employee/profile/name/').map((res: ProfileNameResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

  getAddressService() {
    return this.http.get('http://localhost:4200/api/employee/profile/address/').map((res: ProfileAddressResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

  getContactService() {
    return this.http.get('http://localhost:4200/api/employee/profile/contact/').map((res: ProfileContactResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

  getEmploymentService() {
    return this.http.get('http://localhost:4200/api/employee/profile/employment/').map((res: ProfileEmploymentResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

  getEmergencyContactService() {
    return this.http.get('http://localhost:4200/api/employee/profile/emergencyContact/').map((res: ProfileEmergencyContactResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }

  getDocumentService() {
    return this.http.get('http://localhost:4200/api/employee/profile/document/').map((res: ProfileDocumentResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    });
  }
}


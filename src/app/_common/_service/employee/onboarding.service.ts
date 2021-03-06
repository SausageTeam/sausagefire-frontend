import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { OnboardingPersonResponse, OnboardingAvatarResponse } from "src/app/_common/_domain/employee/onboarding/onboarding-response.model"
import { OnboardingVisaResponse, OnboardingDrivingResponse } from "src/app/_common/_domain/employee/onboarding/onboarding-response.model"
import { OnboardingReferenceResponse, OnboardingEmergencyResponse } from "src/app/_common/_domain/employee/onboarding/onboarding-response.model"
import { OnboardingPerson } from '../../_domain/employee/onboarding/onboarding-person.module';
import { OnboardingVisa } from '../../_domain/employee/onboarding/onboarding-visa.module';
import { OnboardingDriving } from '../../_domain/employee/onboarding/onboarding-driving.module';
import { OnboardingReference } from '../../_domain/employee/onboarding/onboarding-reference.module';
import { OnboardingEmergency } from '../../_domain/employee/onboarding/onboarding-emergency.module';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  constructor(private http: HttpClient) { }

  getOnboardingPersonService() {
    return this.http.get('http://localhost:4200/api/employee/onboarding/person/').map((res: OnboardingPersonResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    })
  };

  postOnboardingPersonService(onboardingPerson: OnboardingPerson) {
    return this.http.post('http://localhost:4200/api/employee/onboarding/person/', { onboardingPerson }).map((res: OnboardingPersonResponse) => {
      // console.log("post");
      // console.log(res);
      return res;
    })
  };

  getOnboardingAvatarService() {
    return this.http.get('http://localhost:4200/api/employee/onboarding/avatar/').map((res: OnboardingAvatarResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    })
  };

  postOnboardingAvatarService(avatar : File) {
    let formData: FormData = new FormData();
    formData.append('avatar', avatar);
    return this.http.post('http://localhost:4200/api/employee/onboarding/avatar/', formData).map((res: OnboardingPersonResponse) => {
      console.log("post");
      console.log(res);
      return res;
    })
  };

  getOnboardingVisaService() {
    return this.http.get("http://localhost:4200/api/employee/onboarding/visa").map((res: OnboardingVisaResponse) => {
      console.log("get");
      console.log(res);
      return res;
    })
  }

  postOnboardingVisaService(onboardingVisa: OnboardingVisa) {
    return this.http.post("http://localhost:4200/api/employee/onboarding/visa", { onboardingVisa }).map((res : OnboardingVisaResponse) => {
      console.log("post");  
      console.log(res);
      return res;
    })
   }

   getOnboardingDrivingService() {
    return this.http.get("http://localhost:4200/api/employee/onboarding/driving").map((res: OnboardingDrivingResponse) => {
      console.log("get");
      console.log(res);
      return res;
    })
  }

  postOnboardingDrivingService(onboardingDriving: OnboardingDriving) {
    return this.http.post("http://localhost:4200/api/employee/onboarding/driving", { onboardingDriving }).map((res : OnboardingDrivingResponse) => {
      console.log("post");  
      console.log(res);
      return res;
    })
   }

   getOnboardingReferenceService() {
    return this.http.get("http://localhost:4200/api/employee/onboarding/reference").map((res: OnboardingReferenceResponse) => {
      console.log("get");
      console.log(res);
      return res;
    })
  }

  postOnboardingReferenceService(onboardingReference: OnboardingReference) {
    return this.http.post("http://localhost:4200/api/employee/onboarding/reference", { onboardingReference }).map((res : OnboardingReferenceResponse) => {
      console.log("post");  
      console.log(res);
      return res;
    })
   }

   getOnboardingEmergencyService() {
    return this.http.get("http://localhost:4200/api/employee/onboarding/emergency").map((res: OnboardingEmergencyResponse) => {
      console.log("get");
      console.log(res);
      return res;
    })
  }

  postOnboardingEmergencyService(onboardingEmergency: OnboardingEmergency) {
    return this.http.post("http://localhost:4200/api/employee/onboarding/emergency", { onboardingEmergency }).map((res : OnboardingEmergencyResponse) => {
      console.log("post");  
      console.log(res);
      return res;
    })
   }
}
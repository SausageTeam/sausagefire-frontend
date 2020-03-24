import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { OnboardingPerson } from "src/app/domain/employee/onboarding/onboarding-person.module"
import { OnboardingVisa } from "src/app/domain/employee/onboarding/onboarding-visa.module"
import { OnboardingPersonResponse, OnboardingAvatarResponse } from "src/app/domain/employee/onboarding/onboarding-response.model"
import { OnboardingVisaResponse } from "src/app/domain/employee/onboarding/onboarding-response.model"
import { OnboardingAvatar } from '../domain/employee/onboarding/onboarding-avator.module';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  constructor(private http: HttpClient) { }

  getOnboardingPersonService(onboardingPerson: OnboardingPerson) {
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

  getOnboardingAvatarService(onboardingAvatar: OnboardingAvatar) {
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

  getOnboardingVisaService(onboardingVisa: OnboardingVisa) {
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
}
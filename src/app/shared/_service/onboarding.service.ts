import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { OnboardingPerson } from "src/app/domain/onboardingPerson.module"
import { Response } from "src/app/shared/domain/Response.model"

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  constructor(private http: HttpClient) { }

  getOnboardingService(onboardingPerson: OnboardingPerson) {
    return this.http.get('http://localhost:4200/api/employee/onboarding/person/').map((res: Response) => {
      console.log(res);
      return res;
    })
  };

  postOnboardingService(onboardingPerson: OnboardingPerson) {
    return this.http.post('http://localhost:4200/api/employee/onboarding/person/', { onboardingPerson }).map((res: Response) => {
      console.log(res);
      return res;
    })
  };
}
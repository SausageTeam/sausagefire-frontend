import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { HireGenerateToken } from '../../_domain/hr/hire/hire-generate-token.module';
import { HireGenerateTokenPostResponse } from '../../_domain/hr/hire/hire-generate-token-response.module';

@Injectable({
  providedIn: 'root'
})
export class HireService {
  constructor(private http: HttpClient) { }

  postHireService(hireGenerateToken : HireGenerateToken) {
    return this.http.post('http://localhost:4200/api/hr/hire/generate-token/', { hireGenerateToken }).map((res: HireGenerateTokenPostResponse) => {
      // console.log("get");
      // console.log(res);
      return res;
    })
  };
}
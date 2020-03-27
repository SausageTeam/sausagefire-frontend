import { Injectable } from '@angular/core';
import { Identity } from '../constant/enum.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  checkLogin() : boolean {
    return false;
  }

  checkIdentity() : number {
    return Identity.Onboarding;
  }
}
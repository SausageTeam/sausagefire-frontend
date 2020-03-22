import { Address } from './address.module';

export class OnboardingReference {

  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  cellPhone : string = "";
  email : string = "";
  address: Address = new Address();
  relationship : string = "";

  constructor() {}
}
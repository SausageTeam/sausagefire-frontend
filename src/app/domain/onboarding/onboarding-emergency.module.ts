import { AddressDomain } from '../address-domain.module';

export class OnboardingEmergency {

  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  cellPhone : string = "";
  email : string = "";
  address: AddressDomain = new AddressDomain();
  relationship : string = "";

  constructor() {}
}
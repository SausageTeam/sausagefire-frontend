import { AddressDomain } from '../../common/address-domain.module';

export class OnboardingEmergency {

  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  cellPhone : string = "";
  email : string = "";
  addressDomain: AddressDomain = new AddressDomain();
  relationship : string = "";

  constructor() {}
}
import { AddressDomain } from '../../common/address-domain.module';

export class OnboardingReference {

  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  cellPhone : string = "";
  email : string = "";
  address: AddressDomain = new AddressDomain();
  relationship : string = "";

  constructor() {}
}
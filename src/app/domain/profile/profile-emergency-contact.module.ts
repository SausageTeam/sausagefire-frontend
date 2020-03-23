import { AddressDomain } from '../address-domain.module';

export class ProfileEmergencyContact {

  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  cellPhone : string = "";
  addressDomain : AddressDomain = new AddressDomain();

  constructor() {}
}
import { Resident } from './resident.module';
import { AddressDomain } from '../../common/address-domain.module';


export class HouseDetail {

    addressDomain : AddressDomain = null;
    residentList : Array<Resident> = null;

    constructor() {}
}
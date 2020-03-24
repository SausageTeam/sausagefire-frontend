import { ServiceStatus } from '../../common/service-status.module';
import { ProfileName } from './profile-name.module';
import { ProfileContact } from './profile-contact.module';
import { ProfileEmployment } from './profile-employment.module';
import { ProfileEmergencyContact } from './profile-emergency-contact.module';
import { ProfileDocument } from './profile-document.module';

export class ProfileNameResponse {
  serviceStatus: ServiceStatus;
  profileName: ProfileName;
}

export class ProfileAddressResponse {
  serviceStatus: ServiceStatus;
  profileContact: ProfileContact;
}

export class ProfileContactResponse {
  serviceStatus: ServiceStatus;
  profileContact: ProfileContact;
}

export class ProfileEmploymentResponse {
  serviceStatus: ServiceStatus;
  profileEmployment: ProfileEmployment;
}

export class ProfileEmergencyContactResponse {
  serviceStatus: ServiceStatus;
  profileEmergencyContact: ProfileEmergencyContact;
}

export class ProfileDocumentResponse {
  serviceStatus: ServiceStatus;
  profileDocument: ProfileDocument;
}
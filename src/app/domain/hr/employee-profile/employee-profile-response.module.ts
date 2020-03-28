import { EmployeeProfile } from './employee-profile.module';
import { ServiceStatus } from '../../common/service-status.module';

export class EmployeeProfileResponse {
    serviceStatus: ServiceStatus;
    employeeProfile: EmployeeProfile;
}
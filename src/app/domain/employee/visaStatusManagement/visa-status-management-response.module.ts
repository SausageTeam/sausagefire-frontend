import { VisaStatusManagement } from "src/app/domain/employee/visaStatusManagement/visa-status-management.module";

import { ServiceStatus } from '../../common/service-status.module';

export class VisaStatusManagementResponse {
    serviceStatus: ServiceStatus;
    visaStatusManagement: VisaStatusManagement;
}
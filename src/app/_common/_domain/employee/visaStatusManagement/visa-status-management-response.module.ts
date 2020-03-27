import { VisaStatusManagement } from "src/app/_common/_domain/employee/visaStatusManagement/visa-status-management.module";

import { ServiceStatus } from '../../common/service-status.module';

export class VisaStatusManagementResponse {
    serviceStatus: ServiceStatus;
    visaStatusManagement: VisaStatusManagement;
}
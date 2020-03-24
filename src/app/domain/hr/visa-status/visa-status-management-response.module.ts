import { VisaStatusManagement } from "src/app/domain/hr/visa-status/visa-status-management.module";

import { ServiceStatus } from '../../common/service-status.module';

export class VisaStatusManagementResponse {
    serviceStatus: ServiceStatus;
    visaStatusManagement: VisaStatusManagement;
}
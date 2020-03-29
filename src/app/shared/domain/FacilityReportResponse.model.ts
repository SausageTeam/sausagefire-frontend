import { FacilityReport } from 'src/app/domain/facilityReport.module';

export class ServiceStatus {
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class FacilityReportResponse {
    serviceStatus : ServiceStatus;
    facilityReport : FacilityReport;
}
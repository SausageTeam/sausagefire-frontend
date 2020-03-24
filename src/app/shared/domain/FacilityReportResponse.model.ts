export class ServiceStatus {
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class FacilityReportResponse {
    serviceStatus : ServiceStatus;
    redirectUrl : string
}
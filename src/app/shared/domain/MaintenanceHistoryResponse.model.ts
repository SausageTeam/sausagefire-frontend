import { MaintenanceHistory } from 'src/app/domain/MaintenanceHistory.module';

export class ServiceStatus {
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class MaintenanceHistoryResponse {
    serviceStatus : ServiceStatus;
    maintenanceHistoryList : Array<MaintenanceHistory>
}
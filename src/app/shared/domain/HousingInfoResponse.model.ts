import { HousingInfo } from 'src/app/domain/housingInfo.module';

export class ServiceStatus {
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class HousingInfoResponse {
    serviceStatus : ServiceStatus;
    housingInfo : HousingInfo
}
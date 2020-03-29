import { AllHousesDetails } from 'src/app/domain/hr/house-management/allHousesDetails.module';
import { EmployeeInfo } from 'src/app/domain/employeeInfo.module';

export class ServiceStatus {
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class AllHousesDetailsResponse {
    serviceStatus : ServiceStatus;
    allHousesDetailsList : AllHousesDetails[]
    employeeInfoList : EmployeeInfo[];
}
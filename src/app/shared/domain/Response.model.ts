import { OnboardingPerson } from 'src/app/domain/onboardingPerson.module';

export class ServiceStatus{
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class Response {
    serviceStatus: ServiceStatus;
    onboardingPerson: OnboardingPerson
}
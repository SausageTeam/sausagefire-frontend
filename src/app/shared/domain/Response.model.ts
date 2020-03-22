import { OnboardingPerson } from 'src/app/domain/onboardingPerson.module';
import { OnboardingVisa } from 'src/app/domain/onboardingVisa.module';

export class ServiceStatus{
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class OnboardingPersonResponse {
    serviceStatus: ServiceStatus;
    onboardingPerson: OnboardingPerson
}

export class OnboardingVisaResponse{
    serviceStatus: ServiceStatus;
    onboardingVisa: OnboardingVisa
}
import { OnboardingPerson } from 'src/app/domain/employee/onboarding/onboarding-person.module';
import { OnboardingVisa } from 'src/app/domain/employee/onboarding/onboarding-visa.module'

export class ServiceStatus{
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class OnboardingPersonResponse {
    serviceStatus: ServiceStatus;
    onboardingPerson: OnboardingPerson
}

export class OnboardingVisaResponse {
    serviceStatus: ServiceStatus;
    onboardingVisa: OnboardingVisa
}
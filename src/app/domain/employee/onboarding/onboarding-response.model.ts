import { OnboardingPerson } from 'src/app/domain/employee/onboarding/onboarding-person.module';
import { OnboardingVisa } from 'src/app/domain/employee/onboarding/onboarding-visa.module'
import { OnboardingAvatar } from './onboarding-avator.module';

export class ServiceStatus{
    statusCode: string;
    success: boolean;
    errorMessage: string
}

export class OnboardingPersonResponse {
    serviceStatus: ServiceStatus;
    onboardingPerson: OnboardingPerson;
}

export class OnboardingAvatarResponse {
    serviceStatus: ServiceStatus;
    onboardingAvatar: OnboardingAvatar;
}

export class OnboardingVisaResponse {
    serviceStatus: ServiceStatus;
    onboardingVisa: OnboardingVisa;
}
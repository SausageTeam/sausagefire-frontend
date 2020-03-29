import { OnboardingPerson } from 'src/app/domain/employee/onboarding/onboarding-person.module';
import { OnboardingVisa } from 'src/app/domain/employee/onboarding/onboarding-visa.module'
import { OnboardingAvatar } from './onboarding-avator.module';
import { OnboardingDriving } from './onboarding-driving.module';
import { OnboardingReference } from './onboarding-reference.module';
import { OnboardingEmergency } from './onboarding-emergency.module';
import { ServiceStatus } from '../../common/service-status.module';


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

export class OnboardingDrivingResponse {
    serviceStatus: ServiceStatus;
    onboardingDriving: OnboardingDriving;
}

export class OnboardingReferenceResponse {
    serviceStatus: ServiceStatus;
    onboardingReference: OnboardingReference;
}

export class OnboardingEmergencyResponse {
    serviceStatus: ServiceStatus;
    onboardingEmergency: OnboardingEmergency;
}
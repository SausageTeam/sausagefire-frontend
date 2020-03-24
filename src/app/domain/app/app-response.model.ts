import { ServiceStatus } from '../common/service-status.module';
import { AppDomain } from './app-domain.module';

export class AppResponse {
  serviceStatus: ServiceStatus;
  appDomain: AppDomain;
}
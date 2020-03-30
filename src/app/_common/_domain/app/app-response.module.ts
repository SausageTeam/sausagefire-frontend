import { ServiceStatus } from '../common/service-status.module';
import { Nav } from './nav.module';

export class NavResponse {
  serviceStatus: ServiceStatus;
  redirectUrl: string;
  nav: Nav;
}
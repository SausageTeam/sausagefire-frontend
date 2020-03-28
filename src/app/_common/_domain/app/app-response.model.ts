import { ServiceStatus } from '../common/service-status.module';
import { Nav } from './nav.module';
import { Auth } from './auth.module';

export class NavResponse {
  serviceStatus: ServiceStatus;
  redirectUrl: string;
  nav: Nav;
}

export class AuthResponse {
  serviceStatus: ServiceStatus;
  redirectUrl: string;
  auth: Auth;
}
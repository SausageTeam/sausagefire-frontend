import { ServiceStatus } from '../../common/service-status.module';
import { Dashboard } from './dashboard.module';

export class DashboardResponse {
    serviceStatus: ServiceStatus;
    dashboard : Dashboard;
  }
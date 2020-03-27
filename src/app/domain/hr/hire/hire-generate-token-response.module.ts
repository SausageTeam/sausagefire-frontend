import { ServiceStatus } from '../../common/service-status.module';
import { HireGenerateToken } from './hire-generate-token.module';

export class HireGenerateTokenPostResponse {

  serviceStatus: ServiceStatus;
  hireGenerateToken : HireGenerateToken;

  constructor() {}
}
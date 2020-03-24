import { VisaStatusRecord } from '../../hr/visa-status/visa-status-record.module';

export class VisaStatusManagement {

  status : number = 0;
  ifNeedDownload : boolean = false;
  comments : string = "";
  emptyForm : string = null;
  sampleForm : string = null;

  constructor() {}
}
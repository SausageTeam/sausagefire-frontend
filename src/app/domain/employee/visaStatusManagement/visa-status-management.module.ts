export class VisaStatusManagement {

  status : number = 0;
  ifNeedDownload : boolean = false;
  comments : string = "";
  emptyForm : File = null;
  sampleForm : File = null;
  visaStatusRecordList: import("/Users/martin/Documents/sausagefire-frontend/src/app/domain/hr/visa-status/visa-status-record.module").VisaStatusRecord[];

  constructor() {}
}
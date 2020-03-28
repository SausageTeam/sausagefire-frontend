export class VisaStatusRecord {

  employeeId : number = 0;
  
  firstName: string = "";
  lastName : string = "";
  middleName : string = "";

  workAuthorization : string = "";

  dayLeft : number = 0;

  visaStatus : string = "";
  visaStartDate : string = "";
  visaEndDate : string = "";

  documentTitleList : Array<string> = null;
  documentRecievedList : Array<File> = null;

  nextStep : string = "";

  constructor() {}
}
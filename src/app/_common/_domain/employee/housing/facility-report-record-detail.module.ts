import { FacilityRecordComment } from './facility-record-comment.module';

export class FacilityReportsRecordDetail {
  title : string;
  description : string;
  createdUser : string;
  reportDate : string;
  status : string;
  facilityRecordCommentList : Array<FacilityRecordComment>;

  constructor() {}
}
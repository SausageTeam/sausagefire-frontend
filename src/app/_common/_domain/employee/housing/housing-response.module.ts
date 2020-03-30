import { HouseDetail } from './house-detail.module';
import { FacilityReportsIssue } from './facility-reports-issue.module';
import { FacilityReportsRecord } from './facility-report-record.module';
import { FacilityRecordUpdate } from './facility-record-update.module';

export class HousingDetailResponse {

    houseDetail : HouseDetail;

    constructor() {}
    
}

export class FacilityReportsResponse {

    facilityReportsIssue : FacilityReportsIssue;

    constructor() {}
}

export class FacilityReportsRecordGetResponse {

    facilityReportsRecord : FacilityReportsRecord;

    constructor() {}
}

export class FacilityReportsRecordPostResponse {
    
    facilityRecordUpdate : FacilityRecordUpdate;

    constructor() {}
}
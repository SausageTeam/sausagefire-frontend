import { Component, OnInit } from '@angular/core';
import { VisaStatusManagement } from 'src/app/_common/_domain/employee/visaStatusManagement/visa-status-management.module';
import { EMVisaStatusManagementService } from 'src/app/_service/employee/em-visa-status-management.service';

@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css']
})
export class VisaStatusComponent implements OnInit {

  visaStatusManagement : VisaStatusManagement = new VisaStatusManagement();

  file : any = null;

  displayMessage = {
    1 : "OPT Receipt",
    2 : "OPT EAD",
    3 : "I-983",
    4 : "I-20",
    5 : "OPT STEM",
    6 : "OPT STEM WAD"
  }

  currentStep : number = 0;

  constructor(
    private visaStatusManagementService : EMVisaStatusManagementService
  ) { }

  ngOnInit(): void {

    this.visaStatusManagementService.getEMVisaStatusManagementService(this.visaStatusManagement).subscribe (
      (res) => {

        console.log(res);

        this.visaStatusManagement = res.visaStatusManagement;

        this.currentStep = this.visaStatusManagement.status + 1;

      }
    );
    
  }

  onFileSelected(event : any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}

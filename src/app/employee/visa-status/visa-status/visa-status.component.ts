import { Component, OnInit } from '@angular/core';
import { VisaStatusManagement } from 'src/app/domain/visaStatusManagement/visa-status-management.module';

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

  constructor() { }

  ngOnInit(): void {
    this.visaStatusManagement.status = 3;
    this.visaStatusManagement.comments = "Hello Trump, you dumbass.";

    this.currentStep = this.visaStatusManagement.status;
  }

  onFileSelected(event : any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}

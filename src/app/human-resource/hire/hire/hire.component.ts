import { Component, OnInit } from '@angular/core';
import { HireGenerateToken } from 'src/app/domain/hr/hire/hire-generate-token.module';
import { HireService } from 'src/app/service/hire.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  ifEmailEnter : boolean = true;
  ifTitleEnter : boolean = true;
  ifStartDateSelect: boolean = true;
  ifEndDateSelect : boolean = true;

  errorMsg : string = "";
  ifSubmit : boolean = false;

  hireGenerateToken : HireGenerateToken = new HireGenerateToken();

  constructor(
    private hireService : HireService
  ) { }

  ngOnInit(): void {}

  onSubmitClick() : void {
    if(this.inputCheck()) {
      // console.log(this.hireGenerateToken);

      this.hireService.postHireService(this.hireGenerateToken).subscribe(
        (res) => {
          this.ifSubmit = true;
          this.errorMsg = res.serviceStatus.errorMessage;
        }
      )
    }
  }

  inputCheck() : boolean {

    let check : boolean = true;

    if(!this.hireGenerateToken.email || this.hireGenerateToken.email === '') {
      this.ifEmailEnter = false;
      check = check && false;
    }

    if(!this.hireGenerateToken.title || this.hireGenerateToken.title === '') {
      this.ifTitleEnter = false;
      check = check && false;
    }

    if(!this.hireGenerateToken.startDate || this.hireGenerateToken.startDate === '') {
      this.ifStartDateSelect = false;
      check = check && false;
    }

    if(!this.hireGenerateToken.endDate || this.hireGenerateToken.endDate === '') {
      this.ifEndDateSelect = false;
      check = check && false;
    }

    return check;

  }

  onEmailEdit(event: any): void {
    if (!this.hireGenerateToken.email || this.hireGenerateToken.email === '') {
      this.ifEmailEnter = false;
    } else {
      this.ifEmailEnter = true;
    }
  }

  onTitleEdit(event: any): void {
    if (!this.hireGenerateToken.title || this.hireGenerateToken.title === '') {
      this.ifTitleEnter = false;
    } else {
      this.ifTitleEnter = true;
    }
  }

  onStartDateSelect(event : any) : void {
    if (!this.hireGenerateToken.startDate || this.hireGenerateToken.startDate === '') {
      this.ifStartDateSelect = false;
    } else {
      this.ifStartDateSelect = true;
    }
  }

  onEndDateSelect(event : any) : void {
    if (!this.hireGenerateToken.endDate || this.hireGenerateToken.endDate === '') {
      this.ifEndDateSelect = false;
    } else {
      this.ifEndDateSelect = true;
    }
  }


}

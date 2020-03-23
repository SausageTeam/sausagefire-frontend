import { Component, OnInit } from '@angular/core';
import { HousingInfo } from 'src/app/domain/housingInfo.module';
import { HousingInfoService } from 'src/app/shared/_service/HousingInfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {

  housingInfo : HousingInfo = new HousingInfo();

  constructor(
    private housingInfoService : HousingInfoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.housingInfoService.getHousingInfoService(this.housingInfo).subscribe(
      (res) => {
        console.log(res);
        this.housingInfo.address = res.housingInfo.address;
        this.housingInfo.residentList = res.housingInfo.residentList;
      }
    )
  }

  onSubmitClick(): void { 
    this.router.navigate(['/employee/housing/report']);
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}

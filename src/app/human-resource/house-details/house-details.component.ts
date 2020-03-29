import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HouseDetails } from 'src/app/domain/hr/house-management/houseDetails.module';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private houseDetailService: HouseDetailService
  ) { }

  ngOnInit(): void {
    // this.house$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.houseDetailService.getHouse(params.get('id')))
    // );
  }

  gotoHouse(house: HouseDetails) {
    let houseId = house ? house.allHousesDetails.id : null;

    this.router.navigate(['/house', { id: houseId }]);
  }
}

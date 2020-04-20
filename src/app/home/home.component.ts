import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  covidDate: any;
  stateWiseDate:any;

  constructor(public helperService:HelperService) { }

  ngOnInit() {
    this.getcovidDate();
    this.getStateData();

    // this.helperService.getConfigResponse.subscribe(item=>{
    //   this.data = item;
    // })
  }

    getcovidDate(): void {
      this.helperService.getcovidDate()
        .subscribe(covidDate => this.covidDate = covidDate);
    }

    getStateData(): void {
      this.helperService.getIndiaStateData()
        .subscribe(stateWiseDate => this.stateWiseDate = stateWiseDate);
    }
  

}

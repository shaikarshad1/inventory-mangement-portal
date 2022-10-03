import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courselistpojo } from 'src/app/courselistpojo';
import { PlayerserviceService } from 'src/services/courseservice.service';
import { EventserviceService } from 'src/services/studentservice.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddplayerComponent implements OnInit {
  addplayerlist = new Courselistpojo();
  sportslistarray:any;
  noDataFound='';


  constructor(private service:PlayerserviceService,private eventService:EventserviceService, private _route: Router) { }

  ngOnInit(): void {
    this.eventService.allstudents().subscribe(
      (resp) =>{
        console.log(resp);
        this.sportslistarray = resp;
        if(this.sportslistarray=='' || this.sportslistarray==null){
          this.noDataFound = 'No Data Found !!';
        }
      },
      error =>{
        console.log("error fetching Eventlist")
        this.noDataFound = 'No Data Found !!';
      }
    );
  }

  addcourse(){
          console.log(this.addplayerlist.courseName);
    this.service.addPlayerToList(this.addplayerlist).subscribe
    (

      data=>{
        console.log("player added succcessfully");
        this._route.navigate(['/courselist']);
      },
      error=>{
        console.log("player not added");
      }
    )
  }

}

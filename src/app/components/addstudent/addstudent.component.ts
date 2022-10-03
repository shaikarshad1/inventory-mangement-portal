import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studentlistpojo } from 'src/app/studentlistpojo';
import { EventserviceService } from 'src/services/studentservice.service';
import { PlayerserviceService } from 'src/services/courseservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddeventsComponent implements OnInit {
  addEventList = new Studentlistpojo();
  courselist:any;
  noDataFound='';
  constructor(private service:EventserviceService,private eventService:EventserviceService,  private _route: Router,private serv:PlayerserviceService) { }

  ngOnInit(): void {
    this.serv.playerlist().subscribe(
      (resp) =>{
        console.log(resp);
        this.courselist = resp;
        if(this.courselist=='' || this.courselist==null){
          this.noDataFound = 'No Data Found !!';
          console.log("error fetching Eventlist")
        }
      },
      error =>{
        console.log("error fetching Eventlist")
        this.noDataFound = 'No Data Found !!';
      }
    );
  }

  addEvent(){
    this.service.addstudent(this.addEventList).subscribe
    (
      data=>{
        console.log("Event added succcessfully");
        this._route.navigate(['/student']);
      },
      error=>{
        console.log("Event not added");
      }
    )
  }

}

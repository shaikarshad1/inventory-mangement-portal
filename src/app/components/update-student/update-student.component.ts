import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PlayerserviceService } from 'src/services/courseservice.service';
import { EventserviceService } from 'src/services/studentservice.service';
import { Studentlistpojo } from 'src/app/studentlistpojo';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
    id!: number;
    courselist:any;
    noDataFound=''
    student: Studentlistpojo=new Studentlistpojo();
  constructor(private studentservice:EventserviceService,private serv:PlayerserviceService, private route:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentservice.searchbyid(this.id).subscribe(data=>{
      this.student=data;
    },error=>console.error(error));

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
  updateStudent(){
    this.studentservice.updatebyid(this.id,this.student).subscribe(data=>{
      this.gotoStudentList();
    },error=>console.error(error)
    );
  }
  gotoStudentList(){
    this.rout.navigate(['/student']);
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventserviceService } from 'src/services/studentservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class EventlistComponent implements OnInit {

  Eventarray:any;
  constructor(private service:EventserviceService,private _route: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.service.allstudents().subscribe(
      (resp) =>{
        console.log(resp);
        this.Eventarray = resp;
      },
      error =>console.log("error fetching Eventlist")
    );
  }

  updateStudent(studentId:number){
    
      this._route.navigate(['/student',studentId]);
    
  }

  deleteEvent(Event: { studentId: number; },studentId:number){
    this.service.deletestudent(Event.studentId).subscribe(
      (resp)=>{
        console.log(resp);
        this.ngOnInit();
      },
      error=>{
        console.log(error);
        this.ngOnInit();
      }     
    );
  }
  alertConfirmation(Event: { studentId: number; },studentId:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Event removed successfully.', 'success');
        this.deleteEvent(Event,studentId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Event is still in our database.)', 'error');
      }
    });
  }

}

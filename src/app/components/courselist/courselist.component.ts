import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerserviceService } from 'src/services/courseservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class PlayerlistComponent implements OnInit {

  playerarray:any;
  toggleButton:boolean=false;
  noDataDisplay='';
  constructor(private service:PlayerserviceService,private _route: Router) { }

  ngOnInit(): void {

    const role=localStorage.getItem('userName');
    if(role=='admin')
    {
      this.toggleButton=true;
    }

    this.service.playerlist().subscribe(
      (resp) =>{
        console.log(resp);
        this.playerarray = resp;
        if(this.playerarray=='' || this.playerarray==null){
          this.noDataDisplay = "No Data Found, Please add Player";
        }
      },
      error =>{
        console.log("error fetching playerlist")
        this.noDataDisplay = "No Data Found, Please add Player";
      }
      
    );
  }

  
  

}

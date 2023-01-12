import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginserviceService } from 'src/services/loginservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  adduserlist=new User();

  constructor(private log:LoginserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  addUser(){

    this.log.register(this.adduserlist).subscribe(
      data=>{
        console.log(this.adduserlist)
        this.router.navigate(['/login'])
      },
      error=>console.log("error")
    )
  }

}

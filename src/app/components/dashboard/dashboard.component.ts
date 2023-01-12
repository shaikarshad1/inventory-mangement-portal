import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/services/loginservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userNameDisplay:string | null | undefined;

  constructor(private loginservice:LoginserviceService) { }

  ngOnInit(): void {
    let token = this.loginservice.getToken();
    console.log("this is my token "+token);
    this.userNameDisplay = localStorage.getItem("userName");
  }

}

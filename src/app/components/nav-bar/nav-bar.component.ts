import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/services/loginservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isCollapsed = true;
  userNameDisplay!:string | null;
  public loggedIn=false;
  toogglee: boolean=true;

  constructor(private loginService:LoginserviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userName')!='admin'){
      this.toogglee=false;

    }
    this.loggedIn = this.loginService.isLoggedIn();
    this.userNameDisplay = localStorage.getItem("userName");
    console.log('========s='+this.userNameDisplay);

  }

  givingRole(){
    return this.userNameDisplay;
  }

  logoutUser(){
    console.log("logout pressed");
    this.loginService.logout()
    location.reload()
  }
}

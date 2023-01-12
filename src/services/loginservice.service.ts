import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/model/user';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class LoginserviceService {

  auth_url="http://localhost:8084/api/auth";
  constructor(private http:HttpClient) { }

  generateToken(userid:string,password:string){
    
    return this.http.post(this.auth_url+"/login",{userid,password},{responseType: 'json'});
  }

  //for login user
  // storing token in localstorage

  loginUser(token:any){
    sessionStorage.setItem("token",token)
    return true;
  }

  // to check user is logged in or not
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }

  // for log out
  logout(){
    localStorage.removeItem("token")
    return true;
  }

  // to get the token
  getToken(){
    return localStorage.getItem("token");
  }

  register(regi:User){
    return this.http.post<User>(this.auth_url+"/register",regi)
  }

}


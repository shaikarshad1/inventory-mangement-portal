import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Studentlistpojo } from "src/app/studentlistpojo";
import { environment } from '../environments/environment';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class EventserviceService {
  student_url= environment.sports;
  constructor(private http: HttpClient) {}

  allstudents() {
    return this.http.get<Studentlistpojo[]>(this.student_url+"/students");
  }

  public addstudent(addStudentList: Studentlistpojo) {
    console.log("addEventList="+addStudentList);
    return this.http.post<any>(this.student_url+"/addstudent", addStudentList);
  }

  public deletestudent(id: number) {
    return this.http.delete<any>(this.student_url+"/student/" + id);
  }

  public searchbyid(id:number) {
    return this.http.get<Studentlistpojo>(this.student_url+"/student/" + id);
  }

  public updatebyid(id:number,student:Studentlistpojo){
    return this.http.put(this.student_url+"/student/" + id,student);
  }

}

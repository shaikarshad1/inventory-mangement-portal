import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Courselistpojo } from "src/app/courselistpojo";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: "root",
})
export class PlayerserviceService {
  
  course_url=environment.player;
  constructor(private http: HttpClient) {}
  playerlist() {
    return this.http.get(this.course_url+"/courses");
  }
  

  public addPlayerToList(addcourselist: Courselistpojo) {
    return this.http.post<any>(
      this.course_url+"/addCourse",
      addcourselist
    );
  }

}

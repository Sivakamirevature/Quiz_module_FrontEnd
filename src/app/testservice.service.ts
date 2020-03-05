import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  view(){
    return this.http.get("http://localhost:8080/Quizzes/getAllQuizzes");
  }
  deleteQuiz(id: number){
    console.log("id2: "+id)
    return this.http.delete("http://localhost:8080/Quizzes/doDeleteByID/"+id);
  }

  SingleQuzInfo(quiz_id:number){
    return this.http.get("http://localhost:8080/Quizzes/getQuizByID/"+quiz_id);
  }

  activeDeactive(id: number,data:any)
  {
    return this.http.put("http://localhost:8080/Quizzes/doActiveDeactiveQuiz/"+id,data);
  }
}
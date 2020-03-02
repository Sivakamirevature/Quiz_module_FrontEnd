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
  delete(){
    return this.http.delete("http://localhost:8080/Quizzes/doDeleteByID/{id}")
  }

  
}

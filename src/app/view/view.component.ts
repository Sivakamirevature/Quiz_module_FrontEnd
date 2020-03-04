import { Component, OnInit } from '@angular/core';
import {TestserviceService} from '../testservice.service';
import {QuizInfoComponent} from '../quiz-info/quiz-info.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  object: Array <any>=[];
  serialNumber: number = 1;
  

  constructor(private serviceClass:TestserviceService) { }

  ngOnInit(): void {
    this.view();
  }

  view() {
    this.serviceClass.view().subscribe((res :any)=>{
      this.object=res;
      console.log(this.object)
      //console.log(this.object[0].quiz_name)
    });
  }

  deleteQuiz(id: number) {
    this.serviceClass.deleteQuiz(id)
      .subscribe(
        data => {
          console.log(data);
          this.view();
        },
        error => {
          return console.log(error);
        });
  }
  // cloneQuiz(id: number){
  //   this.serviceClass.cloneQuiz(id).subscribe(data=>{console.log(data)})
  // }

  SingleQuzInfo(quiz_id:number){
    this.serviceClass.SingleQuzInfo(quiz_id).subscribe(data => {
      console.log(data);
      
    },
    error => {
      return console.log(error);
    });
  }
}
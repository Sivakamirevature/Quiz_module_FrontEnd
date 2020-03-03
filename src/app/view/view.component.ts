import { Component, OnInit } from '@angular/core';
import {TestserviceService} from '../testservice.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  object: Array <any>=[];

  constructor(private obj:TestserviceService) { }

  ngOnInit(): void {
    this.view();
  }
  view() {
    this.obj.view().subscribe((res :any)=>{
      this.object=res;
    });
  }
  public myFunc(s: any) : void{
    console.log(s);
  }
}


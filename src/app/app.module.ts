import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestserviceService } from './testservice.service';
import { ViewComponent } from './view/view.component';

import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateQuizComponent,
    QuizInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient,HttpClientModule,TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
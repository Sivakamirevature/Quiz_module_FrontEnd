import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
const routes: Routes = [
  {path:'Show', component: ViewComponent},
  {path:'CreateQuiz', component: CreateQuizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
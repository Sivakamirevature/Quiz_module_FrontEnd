import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
const routes: Routes = [
  {path:'Show', component: ViewComponent},
  {path:'CreateQuiz', component: CreateQuizComponent},
  {
    path: 'crisis-center',
    loadChildren: () => import('./quiz-info/quiz-info.component').then(m => m.QuizInfoComponent),
    data: { preload: true }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
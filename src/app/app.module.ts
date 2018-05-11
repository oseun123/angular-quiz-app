import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizmetricService } from './quizmetric.service';
import { FilterPipe } from './filter.pipe';
// import { ListComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    QuizComponent,
    FilterPipe, 
    // ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     FormsModule
  ],
  providers: [QuizmetricService],
  bootstrap: [AppComponent]
})
export class AppModule { }

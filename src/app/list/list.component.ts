import { Component, OnInit } from '@angular/core';
import { QuizmetricService } from '../quizmetric.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  pipes: [FilterPipe],

})
export class ListComponent implements OnInit {

  constructor( private quizMetrics: QuizmetricService ) { }
  quizActive;
  ngOnInit() {
  	this.quizMetrics.cast.subscribe(quizActive=> this.quizActive= quizActive);
  	// alert(this.quizActive[0]);
  } 

activeTurtle={};
search;

activateQuiz=function(){
	this.quizMetrics.changeState('quiz', false);
	// alert(this.quizActive);
};

changeActiveTurtle(turtle){
	this.activeTurtle=turtle;
}



 turtlesData= this.quizMetrics.turtlesData;

}
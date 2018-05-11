import { Component, OnInit } from '@angular/core';
import { QuizmetricService } from '../quizmetric.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],

})
export class QuizComponent implements OnInit {

  constructor( private quizMetrics: QuizmetricService ) { }
  ngOnInit() {
    this.quizMetrics.testHttp()
    .subscribe(
      (questions)=>{
        this.questions=questions
      },
      (error)=>{
        this.errorMsg=<any>error
      },  
      );
  	this.quizMetrics.cast.subscribe(quizActive=> this.quizActive= quizActive);
  	this.quizMetrics.cast2.subscribe(resultActive=> this.resultActive= resultActive);
    // console.log(this.questions);
  } 
  questions;
  errorMsg;
  activeQuestion=0; 
  quizQuestions = this.quizMetrics.quizQuestions;
  quizActive;
  resultActive;
  numQuestionAnswered=0;
  error=false;
  finalize=false;
  correctAnswer=this.quizMetrics.correctAnswerapi;
  numCorrect=0;
  ractiveQuestion=0;
  showHttp(){
    console.log(this.questions);
  }

  calculatePercentage(){
  	return(this.numCorrect/this.quizQuestions.length *100);
  }

  rsetActiveQuestion(i){
  	this.ractiveQuestion=i;
  }
 backFact=function(){
 	this.numCorrect=0;
 	for(var i=0; i< this.quizQuestions.length; i++){
 		this.quizQuestions[i].selected=null;
 		this.quizQuestions[i].correct=null;

 	}
	this.quizMetrics.changeState('quiz', true);
		this.quizMetrics.changeState('results', false);
	// alert(this.quizActive);
};

  getAnswerClass(i){
  	if(i === this.correctAnswer[this.ractiveQuestion] ){
  		return "bg-success";
  	}else if( i === this.quizQuestions[this.ractiveQuestion].selected){
  		return "bg-danger";
  	}
  }

  selectAnswer(i){
  	this.quizMetrics.quizQuestions[this.activeQuestion].selected = i;
  }
  setActiveQuestion(i){
  	if(i === undefined){
  		var breakOut=false;
  		var quizlength=this.quizMetrics.quizQuestions.length -1;
  		while(!breakOut){
  			this.activeQuestion = this.activeQuestion < quizlength ? ++this.activeQuestion:0;
  			if(this.activeQuestion === 0){
  				this.error=true;
  			}
  			if(this.quizMetrics.quizQuestions[this.activeQuestion].selected === null){
  				breakOut = true;	
  			}
  		}
  	}else{
  		this.activeQuestion= i;
  	}
  
  	
  }
  questionAnswered(){
  	var quizlength= this.quizMetrics.quizQuestions.length;
  		if(this.quizQuestions[this.activeQuestion].selected !== null){
  			this.numQuestionAnswered++;
  			if(this.numQuestionAnswered >=quizlength){
  				for(var i=0; i<quizlength; i++){
  					if(this.quizMetrics.quizQuestions[i].selected === null){
  						this.setActiveQuestion(i);
  						return false;
  					}

  				}
  				this.error=false;
  				this.finalize=true;
  				return false;
  			}
  		}
  		this.setActiveQuestion(undefined);
  }

  finalizeAnswer(){
  	this.finalize=false;
  	this.numQuestionAnswered=0;
  	this.activeQuestion=0;
  	this.markQuiz();
  	this.quizMetrics.changeState('results', true);


  }

  markQuiz(){
  	for(var i= 0; i<this.quizMetrics.quizQuestions.length; i++ ){
  		if(this.quizMetrics.quizQuestions[i].selected===this.correctAnswer[i]){
  			this.quizMetrics.quizQuestions[i].correct=true;
  			this.numCorrect++;
  		}else{
  			this.quizMetrics.quizQuestions[i].correct=false;
  		}

  	}
  }


}

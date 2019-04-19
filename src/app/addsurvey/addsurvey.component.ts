import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  constructor(private setList:ListService,private router:Router) { }

  ngOnInit() {
  }
  show:boolean=false;
  queArr:any=[];
  queArr1:any=[];
  option1:any='';
  option2:any='';
  option3:any='';
  option4:any='';
  optiontype:any='';
  surveyname:any='';
  question:any='';
	addQuestions(){
		console.log(this.optiontype,this.question,this.option1,this.option2,this.option3,this.option4,this.surveyname)
		if(this.optiontype!='Multiple Choices'){
			let Obj1 = {
				'qname':this.question,
				'otype':this.optiontype
			}
			this.queArr.push(Obj1);
		}else{
			let Obj1 = {
				'qname':this.question,
				'otype':this.optiontype,
				'Opt1':this.option1,
				'Opt2':this.option2,
				'Opt3':this.option3,
				'Opt4':this.option4
			}
			this.queArr.push(Obj1);
		}
		
		this.optiontype='';
		this.option4='';
		this.option3='';
		this.option2='';
		this.option1='';
		this.question='';
		console.log(this.queArr);
		let Obj2={
			'surveyName':this.surveyname,
			'questions':this.queArr
		}
		this.queArr1.push(Obj2)
		console.log(this.queArr1)
	}
	onChange($event){
		console.log($event);
		this.optiontype=$event;
		if(this.optiontype!='Multiple Choices'){
			this.show=false
		}else{
			this.show=true
		}
	}
	submitSurvey(){
		console.log(this.queArr1)
    	this.setList.setData(this.queArr1[0]); 
    	/*this.queArr=[];*/
    	this.router.navigate([''])
	}
}

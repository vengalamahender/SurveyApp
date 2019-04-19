import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $AB from 'jquery';

@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  constructor(private setList:ListService,private router:Router,private formBuilder: FormBuilder) { }
    registerForm: FormGroup;
    submitted = false;
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Question: ['', Validators.required],
            optiontype: ['', Validators.required],
            option1: ['', Validators.required],
            option2: ['', Validators.required],
            option3: ['', Validators.required],
            option4: ['', Validators.required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
  /*      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
    }
    showModal(){
    	if(this.surveyname!=""){
    		(<any>$('#myModal')).modal('show');
    	}else{
    		alert('Add Survey Name..')
    	}
    }
  show:boolean=false;  queArr:any=[];  queArr1:any=[];  option1:any='';  option2:any='';  option3:any='';  option4:any='';
  optiontype:any='';  surveyname:any='';  question:any='';
	addQuestions(){
		console.log(this.registerForm.value.optiontype,this.registerForm.value.Question,this.option1,this.option2,this.option3,this.option4,this.surveyname)
		this.question = this.registerForm.value.Question==null?"":this.registerForm.value.Question;
		this.optiontype = this.registerForm.value.optiontype==null?"":this.registerForm.value.optiontype;
		if(this.optiontype!='Multiple Choices'&&this.question!=""&&this.optiontype!=""){
			let Obj1 = {
				'qname':this.question,
				'otype':this.optiontype
			}
			this.queArr.push(Obj1);
			this.submitData();
		}else if(this.question!=""&&this.optiontype!=""){
			let Obj1 = {
				'qname':this.question,
				'otype':this.optiontype,
				'Opt1':this.option1,
				'Opt2':this.option2,
				'Opt3':this.option3,
				'Opt4':this.option4
			}
			this.queArr.push(Obj1);
			this.submitData();
		}
		
		console.log(this.queArr);
	}
	submitData(){
		let Obj2={
			'surveyName':this.surveyname,
			'questions':this.queArr
		}
		this.queArr1.push(Obj2)
		console.log(this.queArr1);
		this.optiontype='';	this.option4='';this.option3='';this.option2='';this.option1='';this.question='';
		this.show=false;
		this.registerForm.reset();
		 (<any>$('#myModal')).modal('hide');
	}
	type:any="";
	onChange($event){
		console.log($event.target.value);
		this.optiontype=$event.target.value;
		if(this.optiontype!='Multiple Choices'){
			this.show=false
		}else{
			this.show=true
		}
	}
	submitSurvey(){
		console.log(this.queArr1)
		if(this.queArr1.length>0&&this.surveyname!=""){
			    this.setList.setData(this.queArr1[0]); 
		    	/*this.queArr=[];*/
		    	this.router.navigate([''])
		}else{
			alert('Add Survey...')
		}

	}
}

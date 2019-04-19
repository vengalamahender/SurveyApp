import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private listData:ListService) { }
title = 'Survey App';
survaylist:any='';
show1:boolean=false;
  ngOnInit() {
  	this.data();
  }
  data() { 
    console.log(this.listData.getData())
    this.survaylist=this.listData.getData();
    console.log(this.survaylist)
    if(this.survaylist.length!=0){
    	this.show1=true;
    }
/*    	.subscribe((data)=>{
    		console.log(data)
    	})*/
  } 
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListService {

listdata:any=[];;
	setData(value){
		this.listdata.push(value);
	}
	getData(){
		return  this.listdata;
	}
  constructor() { 

  }
}

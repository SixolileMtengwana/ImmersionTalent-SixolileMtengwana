import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from './profile.service';

@Injectable()
export class Data {
    data:Profile[]=[]
  constructor( public httpReq : Http ) {

   }

  getData(){
    return this.httpReq.get('../../assets/Employees.json').map(employees => employees.json());
  }
  getProfiles():Profile[]{
    this.getData().subscribe(employees =>{
      setTimeout(()=>{
       for(let i =0; i< employees.length; i++){
        const employee:Profile = 
        new Profile(employees[i].id,employees[i].first_name,employees[i].last_name,employees[i].email,employees[i].gender,
         employees[i].Username,employees[i].Department,employees[i].Avatar);
         //Adding to data Array
         this.data.push(employee);
       }
      }, 10); 
     });;
     return this.data;
  }
  
}

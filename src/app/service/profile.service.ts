import { Injectable } from '@angular/core';

@Injectable()
export class Profile {
  id:number;
  first_name:string;
  last_name: string;
  email:string;
  gender:string;
  Username: string;
  Department: string;
  Avatar:string;
  constructor( id:number, first_name:string, last_name: string, email:string, gender:string, Username: string, Department: string, Avatar:string) {
    this.id=id;
    this.first_name=first_name;
    this.last_name=last_name;
    this.email=email;
    this.gender=gender;
    this.Username=Username;
    this.Department = Department;
    this.Avatar= Avatar;
   }

}

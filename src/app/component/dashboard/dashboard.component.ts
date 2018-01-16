import { Component } from '@angular/core';
import { Data } from '../../service/data.service';
import { Profile } from '../../service/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  data_positions:string[];
  profile_data:Profile[] =[];
  constructor( public data:Data) { 
    this.profile_data = data.getProfiles();
    setTimeout(()=>{
  for(let i =0; i<this.profile_data.length;i++){
      console.log(this.profile_data[i].Department)
      if(!this.data_positions.includes(this.profile_data[i].Department)){
        this.data_positions.push(this.profile_data[i].Department);
      }
  }
    },1000);


     
  }



}

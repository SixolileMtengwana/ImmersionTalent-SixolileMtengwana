import { Component } from '@angular/core';
import { Profile } from '../../service/profile.service';
import { Data } from '../../service/data.service';

@Component({
  selector: 'dropbar',
  templateUrl: './dropbar.component.html',
  styleUrls: ['./dropbar.component.css']
})
export class DropbarComponent {
  data_positions:string[]=['Departments'];
  profile_data:Profile[] =[];
  constructor( public data:Data) { 
    this.profile_data = data.getProfiles();
    
    setTimeout(()=>{
      this.data_positions =[];
  for(let i =0; i<this.profile_data.length;i++){
      if(!this.data_positions.includes(this.profile_data[i].Department)){
        this.data_positions.push(this.profile_data[i].Department);
      }
  }
    },1000);    
  }
onClick(S:string){
console.log(S)
}
}

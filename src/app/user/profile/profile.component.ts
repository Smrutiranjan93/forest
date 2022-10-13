import { Component, Input, OnInit } from '@angular/core';
import { UserRegistration } from 'src/app/models/auth.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: UserRegistration;
    
    constructor() { }

    ngOnInit(): void {
      console.log(this.user)
    }
    id:any="Home";
    tabChange(ids:any){
      this.id=ids;
      //console.log(ids:any);
    }
}

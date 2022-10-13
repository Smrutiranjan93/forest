import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmentuserprofile',
  templateUrl: './departmentuserprofile.component.html',
  styleUrls: ['./departmentuserprofile.component.scss']
})
export class DepartmentuserprofileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id:any="Home";
  tabChange(ids:any){
    this.id=ids;
    //console.log(ids:any);
  }
}

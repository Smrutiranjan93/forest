import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss']
})
export class EventdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id:any="Events";
  tabChange(ids:any){
    this.id=ids;
  }

}

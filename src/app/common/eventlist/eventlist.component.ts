import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
  isShow: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  detailStatus() {
    this.isShow = !this.isShow;
  }
  id:any="";
  tabChange(ids:any){
    this.id=ids;
  }
}

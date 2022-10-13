import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calenderdata',
  templateUrl: './calenderdata.component.html',
  styleUrls: ['./calenderdata.component.scss']
})
export class CalenderdataComponent implements OnInit {
  isShow: boolean;
  

  constructor() { }

  ngOnInit(): void {
  }
  detailStatus() {
    this.isShow = !this.isShow;
  }
}

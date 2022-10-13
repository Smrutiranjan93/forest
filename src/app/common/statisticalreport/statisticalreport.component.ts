import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statisticalreport',
  templateUrl: './statisticalreport.component.html',
  styleUrls: ['./statisticalreport.component.scss']
})
export class StatisticalreportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/images/blank.pdf');
    link.setAttribute('download', `blank.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-keystatistics',
  templateUrl: './keystatistics.component.html',
  styleUrls: ['./keystatistics.component.scss']
})
export class KeystatisticsComponent implements OnInit {

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

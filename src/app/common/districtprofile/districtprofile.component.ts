import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-districtprofile',
  templateUrl: './districtprofile.component.html',
  styleUrls: ['./districtprofile.component.scss']
})
export class DistrictprofileComponent implements OnInit {

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

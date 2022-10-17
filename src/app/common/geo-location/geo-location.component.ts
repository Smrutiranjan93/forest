// import { LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import * as L from 'leaflet'


// @Component({
//   selector: 'app-geo-location',
//   templateUrl: './geo-location.component.html',
//   styleUrls: ['./geo-location.component.scss']
// })
// export class GeoLocationComponent implements OnInit {
  
//   constructor() {
    
//   }
  
//   private map : L.Map;
//   private centroid : L.LatLngExpression = [28.83,78.78];

//   ngOnInit(): void {
//   this.loadMap();
 
//     }

//   loadMap(){
//     this.map = L.map('map',{center : this.centroid, zoom: 11.2,zoomControl: true,crs: L.CRS.EPSG4326}).setView([28.83,78.78],11)
//     // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     // }).addTo(this.map); 
    
//     var wmsLayer = L.tileLayer.wms("http://sc1mscl.sgligis.com:1213/cgi-bin/IGiS_Ent_service.exe?IEG_PROJECT=mscl_ws"
//     ,{
//       layers: 'boundary_ward',
//       transparent : true,
//       format:'image/png',
//       version: '1.1.1',
//       });
//     wmsLayer.addTo(this.map);

//     // var wmsLayer2 = L.tileLayer.wms("http://sc1mscl.sgligis.com:1213/cgi-bin/IGiS_Ent_service.exe?IEG_PROJECT=mscl_ws"
//     // ,{
//     //   layers: 'landmark_health_Blood_Bank',
//     //   transparent : true,
//     //   format:'image/png',
//     //   version: '1.1.1',
//     //   });
//     // wmsLayer2.addTo(this.map);
//   }

//   }
  

import { Component, OnInit, ViewChild } from '@angular/core';
import { sencer } from 'src/app/models/sencer.model';
import { AuthService } from 'src/app/service/auth.service';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";
import { range } from 'rxjs'
declare const L:any;
export type ChartOptions = {
  series : ApexNonAxisChartSeries ;
  chart: ApexChart;
  labels : string[];
  plotOptions : ApexPlotOptions;
  fill : ApexFill;
};
@Component({
  selector: 'app-aqi',
  templateUrl: './aqi.component.html',
  styleUrls: ['./aqi.component.scss']
})
export class AqiComponent implements OnInit {
  WeatherData:any;
  currentDate:any;
  datee: Date;
  satation:string;
  sencerData:sencer[];
  event:any;
  dt:Date;
 aqi:string;
 loading:Boolean;
  pollutantName: string;
  aqiStatus:string;
  error:string;
   Latitude: {id:number,value:number}
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  constructor(
    private authService: AuthService,
  ) { }
  
  ngOnInit(): void {
    // const coordinates = {
    //   Latitude: [
    //    { id:'0',value: 34.07381780761041},
    //    {id:'1',value: 34.0211224},
    //    // {id:'2',value: 28.856094},
    //   ],
    //   Longitude: [
    //     {id:'0',value:-118.44177995896911,content:'Back to Culver City!'},
    //     {id:'1',value: -118.3964665,content:'Back to Culver City!'},
    //    // {id:'2',value: 79.5009093},
    //   ],
    // };
    
   // for (let i = 0; i < Object.keys(coordinates.Latitude).length; i++) {
  //  var map = L.map('map').setView([34.07381780761041, -118.44177995896911], 13);
    //}
//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmliaHUxMiIsImEiOiJja3hycTN1cHMwNXhzMm9vendjc3Jxcmp2In0.pPAGus0sTLemGglwJ1LFzA', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);
// console.log(Object.keys(coordinates.Latitude).length);
// console.log(coordinates);
// for (let i = 0; i < Object.keys(coordinates.Latitude).length; i++) {
//   const marker = L.marker([
//     coordinates.Latitude[i].value,
//     coordinates.Longitude[i].value,
//   ]);
//   console.log(marker)
//   //marker.myData = { id: coordinates.Latitude[i].value};
//   marker.bindPopup(coordinates.Longitude[i].content);
//   marker.addTo(map);
// }


//var marker = L.marker([28.356094, 79.41988]).addTo(map);
//marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// var popup = L.popup()
//     .setLatLng([28.356094, 79.41988])
//     .setContent("I am a standalone popup.")
//     .openOn(map);


    // this.chartOptions = {
    //   series: [],
    //   chart: {
    //     type: "radialBar",
    //     offsetY: -20
    //   },
    //   plotOptions: {
    //     radialBar: {
    //       startAngle: -90,
    //       endAngle: 90,
    //       track: {
    //         background: "#e7e7e7",
    //         strokeWidth: "97%",
    //         margin: 5, // margin is in pixels
    //         dropShadow: {
    //           enabled: true,
    //           top: 2,
    //           left: 0,
    //           opacity: 0.31,
    //           blur: 2
    //         }
    //       },
    //       dataLabels: {
    //         name: {
    //           show: false
    //         },
    //         value: {
    //           offsetY: -2,
    //           fontSize: "22px"
    //         }
    //       }
    //     }
    //   },
    //   fill: {
    //     type: "gradient",
    //     gradient: {
    //       shade: "light",
    //       shadeIntensity: 0.4,
    //       inverseColors: false,
    //       opacityFrom: 1,
    //       opacityTo: 1,
    //       stops: [0, 50, 53, 91],
    //       range:[0,500]
    //     }
    //   },
    //   labels: ["Average Results"]
    // };

    this.getAqi();
  }


  getAqi(){
    this.loading=true;
    this.satation='BUDDHI_VIHAR';
    this.error='';
    this.authService.getAqi(this.satation).subscribe((data: any) => {
      // this.alertService.success('Registration successful', true);
      console.log(data)
      this.loading=false;
      this.sencerData=data.parameterList;
      console.log(this.sencerData)
      this.datee=data.latestTimestamp;
      this.aqi=data.aqiValue;
     this.pollutantName= data.pollutantName
     this.aqiStatus=data.aqiStatus;
      this.dt = this.datee;
    // this.dt.setHours( this.dt.getHours() + 5.30 );
     console.log(this.dt)
     this.chartOptions.series=[this.aqi];
              // if(this.registrationSuccess){

   //   this.router.navigate(['/sendOtp'])
          //  this.router.navigate(['/signIn'])
              // }
  },	    
  error => {
    this.loading=false;
      // this.alertService.error(error);
  //    this.loading = false;
     // this.error = error.error;
  });
  }
  station(event:any){
    console.log(event.target.value);
//     if(event.target.value === 'BUDDHI_VIHAR'){
// this.getAqi();
//     }
    this.loading=true;
    this.sencerData=[];
    this.error='';
    this.aqi='';
   this.pollutantName='';
   this.aqiStatus='';
    this.authService.getAqi(event.target.value).subscribe((data: any) => {
      // this.alertService.success('Registration successful', true);
      this.sencerData=data.parameterList;
      console.log(this.sencerData)
      this.datee=data.latestTimestamp;
      this.aqi=data.aqiValue;
     this.pollutantName= data.pollutantName
     this.aqiStatus=data.aqiStatus;
      this.dt = this.datee;
      this.loading=false;
      console.log(data)
      this.sencerData=data.parameterList;
      console.log(this.sencerData)
    
              // if(this.registrationSuccess){

   //   this.router.navigate(['/sendOtp'])
          //  this.router.navigate(['/signIn'])
              // }
  },	    
  error => {
    this.loading=false;
      // this.alertService.error(error);
  //    this.loading = false;
  console.log(error);
      this.error = 'Live Data Will Avaliable Soon';
      console.log(this.error);
  });
  }
  
 
}

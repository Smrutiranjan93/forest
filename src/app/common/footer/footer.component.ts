import { Component, OnInit, ViewChild } from '@angular/core';
import { sencer } from 'src/app/models/sencer.model';
import { AuthService } from 'src/app/service/auth.service';
import {
//   ApexNonAxisChartSeries,
//   ApexPlotOptions,
//   ApexChart,
//   ApexFill,
//   ChartComponent
// } from "ng-apexcharts";
// import { range } from 'rxjs'
// declare const L:any;
// export type ChartOptions = {
//   series : ApexNonAxisChartSeries ;
//   chart: ApexChart;
//   labels : string[];
//   plotOptions : ApexPlotOptions;
//   fill : ApexFill;
// };
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    WeatherData:any;
    currentDate:any;
  //   date: Date;
  //   datee: Date;
  //   satation:string;
  //   sencerData:sencer[];
  //   event:any;
  //   dt:Date;
  //  aqi:string;
  //  loading:Boolean;
  //   pollutantName: string;
  //   aqiStatus:string;
  //   error:string;
  //    Latitude: {id:number,value:number}
    
  //    @ViewChild("chart") chart: ChartComponent;
  //    public chartOptions: Partial<ChartOptions> | any;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // this.WeatherData = {
        //     main : {},
        //     isDay: true
        //   };
        //   this.getWeatherData();
        //   console.log(this.WeatherData);
        //   this.date =  new Date();
        // this.getAqi();
    }

    // getWeatherData(){
    //     fetch('https://api.openweathermap.org/data/2.5/weather?lat=28.85035266337074&lon=78.75416002625916&appid=15f377a874ad48f70e1fedb2046b6363')
    //     .then(response=>response.json())
    //     .then(data=>{this.setWeatherData(data);})
    
    //     // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Moradabad","cod":200}');
    //     // this.setWeatherData(data);
    //   }
    //   setWeatherData(data: any){
    //     this.WeatherData = data;
    //     let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    //     this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //     let currentDate = new Date();
    //     this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    //     this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    //     this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //     this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //     this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
        
    //   }
    


    ngAfterViewInit() {
        var weather = document.getElementById('weather');
        var right = document.getElementById('right');
        right?.addEventListener("click", function()  {
            weather?.classList.toggle('active');
        });
    }
    // getAqi(){
    //   this.loading=true;
    //   this.satation='BUDDHI_VIHAR';
    //   this.error='';
    //   this.authService.getAqi(this.satation).subscribe((data: any) => {
        // this.alertService.success('Registration successful', true);
      //   console.log(data)
      //   this.loading=false;
      //   this.sencerData=data.parameterList;
      //   console.log(this.sencerData)
      //   this.datee=data.latestTimestamp;
      //   this.aqi=data.aqiValue;
      //  this.pollutantName= data.pollutantName
      //  this.aqiStatus=data.aqiStatus;
      //   this.dt = this.datee;
      // this.dt.setHours( this.dt.getHours() + 5.30 );
      //  console.log(this.dt)
      //  this.chartOptions.series=[this.aqi];
                // if(this.registrationSuccess){
  
     //   this.router.navigate(['/sendOtp'])
            //  this.router.navigate(['/signIn'])
                // }
    // },	    
    // error => {
    //   this.loading=false;
        // this.alertService.error(error);
    //    this.loading = false;
       // this.error = error.error;
    // });
    // }
    station(event:any){
      console.log(event.target.value);
  //     if(event.target.value === 'BUDDHI_VIHAR'){
  // this.getAqi();
  //     }
    //   this.loading=true;
    //   this.sencerData=[];
    //   this.error='';
    //   this.aqi='';
    //  this.pollutantName='';
    //  this.aqiStatus='';
    //   this.authService.getAqi(event.target.value).subscribe((data: any) => {
        // this.alertService.success('Registration successful', true);
      //   this.sencerData=data.parameterList;
      //   console.log(this.sencerData)
      //   this.datee=data.latestTimestamp;
      //   this.aqi=data.aqiValue;
      //  this.pollutantName= data.pollutantName
      //  this.aqiStatus=data.aqiStatus;
      //   this.dt = this.datee;
      //   this.loading=false;
      //   console.log(data)
      //   this.sencerData=data.parameterList;
      //   console.log(this.sencerData)
      
                // if(this.registrationSuccess){
  
     //   this.router.navigate(['/sendOtp'])
            //  this.router.navigate(['/signIn'])
                // }
    // },	    
    // error => {
    //   this.loading=false;
        // this.alertService.error(error);
    //    this.loading = false;
    // console.log(error);
    //     this.error = 'Live Data Will Avaliable Soon';
    //     console.log(this.error);
    // });
    // }
    
}}

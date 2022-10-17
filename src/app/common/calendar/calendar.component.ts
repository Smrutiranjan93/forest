import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  selectedDate: any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      {
      title: 'Conference',
      description: 'Description for Conference',
      date: '2021-11-11',
    },
      {
      title: 'Conference', 
      date: '2021-12-21',
      description: 'Description for conference',}
    ],
     //dateClick: this.handleDateClick.bind(this), // bind is important!
    
  };
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
   
  }
  mouseOver(event: { description: { event: { data: any; }; }; }, content: any){
    var data = event.description.event.data;
    this.calendarOptions.events = data;
    console.log(this.calendarOptions.events);
  }
  constructor() { }

  ngOnInit(){
   
    }  

}

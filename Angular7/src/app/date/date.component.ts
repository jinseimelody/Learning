import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  daysOfWeek = [];

  constructor() { }

  ngOnInit() {
    let date = this.getMonday();
    for(let i = 0; i < 14; i++){
      this.daysOfWeek.push(new Date(date.getFullYear(),date.getMonth(),date.getDate()+i));
    }
  }
  getMonday(){
    let date = new Date();
    let monday = date.getDate() - date.getDay()+1;
    return new Date(date.getFullYear(),date.getMonth(),monday);
  }

}

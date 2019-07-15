import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  yourName = "";
  arrWord = [
    {id: 1, en: "news", vi: "bản tin", memorized:false},
    {id: 2, en: "english", vi: "tiếng anh", memorized:true},
    {id: 3, en: "alarm", vi: "đồng hồ", memorized:true},
    {id: 4, en: "fan", vi: "quạt máy", memorized:false},
    {id: 5, en: "circle", vi: "hình tròn", memorized:false},
  ];
  constructor() { }

  ngOnInit() {
  }

}

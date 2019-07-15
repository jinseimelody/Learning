import { Component, OnInit , AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-test',
  templateUrl: './filter-test.component.html',
  styleUrls: ['./filter-test.component.css']
})
export class FilterTestComponent implements OnInit , AfterViewInit{
  ngAfterViewInit(): void {
    var dom = document.getElementById('profile').querySelectorAll('input');
    for (let i = 0; i < dom.length; i++) {
      dom[i].addEventListener("keydown",event =>{
        if(event.keyCode === 13 && i != dom.length-1){
          event.preventDefault();
          dom[i+1].focus();
        }
      });
    }
  }

  data =[
    {name:"cuốn theo chiều gió", author:"nguyễn văn an" , price:100000},
    {name:"một đi không trở lại", author:"trần thị nguyệt" , price:300000},
    {name:"những con ngáo ngành", author:"nguyễn tiến thành" , price:50000},
    {name:"làm đĩ", author:"lê ngọc như" , price:400002},
    {name:"code dạo dễ vl", author:"trương hồng anh" , price:112000},
    {name:"vội vàng", author:"đặng lê vũ" , price:100230},
    {name:"cậu vàng", author:"phạm tấn tài" , price:245000},
    {name:"how to leo thách đấu với yasuo", author:"vũ khắc tiệp" , price:59000},
    {name:"ăn gì cho mập", author:"nguyễn lê anh đức" , price:90000},
    {name:"chuyện của lee tui", author:"phan bảo ngọc ảnh" , price:990000},
    {name:"sóng vỗ", author:"trần thiện thanh bảo" , price:2300},
    {name:"how to sinh tồn", author:"hà quang vịnh" , price:100023},
    {name:"ai dễ òm", author:"đỗ đức nam" , price:1002300},
    {name:"chào ngày mới", author:"nguyễn hữu văn long" , price:120000},
  ];
  filter = this.data;

  profile = this.fb.group({
    name:[''],
    email:[''],
    password:['']
  });

  constructor(private fb: FormBuilder ) {   }
  
  ngOnInit() {
    
  }

  doFilter(event){
    let keys = event.target.value;
    if(keys === '')
    this.filter = this.data;
    else
    this.filter =  this.data.filter(item =>{
      return item.name.includes(keys) || item.author.includes(keys) || item.price.toString().includes(keys);
    });
  }

  onSubmit(body){
    alert('form submited');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  values = ['AM', 'PM'];
  defaultValue = this.values[1];		

  constructor() { }

  ngOnInit() {
  }

  showSelectedData(){
  	//console.log(this.datas);
  }
}

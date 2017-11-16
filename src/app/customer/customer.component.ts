import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { CustomerService } from '../services/customer.service';

import { Customer } from '../models/customer-model';
 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  btnName:string = "Create Customer";	
  customers:Customer[];	
  newCustomer:Customer = new Customer();	
  editingCustomer:Customer = new Customer();
  isValidate:boolean = true;
  errorName:string;
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  	this.getCustomers();
  }

  createCustomer():void{
  	console.log(this.newCustomer.name);
    this.validateCustoemr();
  	/*this.customerService.saveCustomer(this.newCustomer).then(customerList => {
  		this.newCustomer = new Customer();
  		this.customers = customerList;
  	});
  	*/
  }

  getCustomers():void{
  	this.customerService.getCustomers()
  	.then(customers => this.customers = customers);
  }

  deleteCustomer(id:number):void{
  	console.log(id);
  	this.customerService.deleteCustomer(id)
  	.then(() => {
  		this.customers = this.customers.filter(cus => cus.customer_id != id);
  	})
  }

  editCustomer(customer:Customer):void{  	
  	this.newCustomer = customer;
  	this.btnName = "Update Customer"
  }

  validateCustoemr(){
    if(!this.newCustomer.name){this.isValidate = false;this.errorName = "Name"}
  }

}

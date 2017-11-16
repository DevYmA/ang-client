import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Customer } from '../models/customer-model';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {
	private baseUrl = 'http://localhost:8080/customers';


  constructor(private http:Http) { }

  saveCustomer(customer:Customer): Promise<Customer[]>{
  	console.log("Running customer service")
  	return this.http.post(this.baseUrl,customer)
  	.toPromise()
  	.then(response => response.json() as Customer)
  	.catch(this.errorHanler);
  }

  getCustomers(): Promise<Customer[]>{
  	return this.http.get(this.baseUrl)
  	.toPromise()
  	.then(response => response.json() as Customer)
  	.catch(this.errorHanler);
  }

  deleteCustomer(id:number):Promise<any>{
  	return this.http.delete(this.baseUrl+"/"+id)
  	.toPromise()
  	.catch(this.errorHanler);
  }

  updateCustomer(id:number, customer:Customer):Promise<Customer[]>{
  	return this.http.put(this.baseUrl+"/"+id,customer)
  	.toPromise()
  	.then(respose => respose.json() as Customer)
  	.catch(this.errorHanler);
  }
  /*noA(customer:Customer): Promise<Customer>{
  	return this.http.post(this.baseUrl+'/save',customer)
  	.toPromise()
  	.then(response => response.json() as Customer)
  	.catch(this.errorHanler)
  }*/

  private errorHanler(error: any): Promise<any>{
  	console.error('Occur some error',error);
  	return Promise.reject(error.message || error);
  }

}

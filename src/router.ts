import { Routes }   from '@angular/router';

import { CustomerComponent } from './app/customer/customer.component';
import { ItemComponent } from './app/item/item.component';
import { OrdersComponent } from './app/orders/orders.component';

export const appRouters: Routes = [
  { path:'customer', component: CustomerComponent },
  { path:'item', component: ItemComponent },
  { path:'order', component: OrdersComponent },
]
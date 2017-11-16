import { Routes }   from '@angular/router';

import { CustomerComponent } from './app/customer/customer.component';
import { ItemComponent } from './app/item/item.component';

export const appRouters: Routes = [
  { path:'customer', component: CustomerComponent },
  { path:'item', component: ItemComponent }
]
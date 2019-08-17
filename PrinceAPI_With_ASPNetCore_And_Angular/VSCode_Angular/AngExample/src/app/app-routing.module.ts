import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import {ListPriceComponent} from './admin/pricemng/ListPrice.component';
import { PricedetailsComponent } from './admin/pricedetails/pricedetails.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
  { path: 'admin', component:  AdminComponent},
  //{ path: 'add', component:  PricedetailsComponent},
  //{ path: 'employee', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

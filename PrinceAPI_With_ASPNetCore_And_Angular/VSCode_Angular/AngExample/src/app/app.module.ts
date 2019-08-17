import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PriceingsrvService} from './Shared/priceingsrv.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsformComponent } from './contacts/contactsform/contactsform.component';
import { ContactslistComponent } from './contacts/contactslist/contactslist.component';
import { PricingComponent } from './pricing/pricing.component';
import { ListPriceComponent } from './admin/pricemng/ListPrice.component';
import { PricedetailsComponent } from './admin/pricedetails/pricedetails.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsformComponent,
    ContactslistComponent,
    PricingComponent,
    ListPriceComponent,
    PricedetailsComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

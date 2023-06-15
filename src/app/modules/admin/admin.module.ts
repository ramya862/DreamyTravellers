import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { PlacesdetailsComponent } from './components/placesdetails/placesdetails.component';
@NgModule({
  declarations: [
    AdminDashboardComponent,ServicesComponent,HeaderComponent,ContactsComponent,FooterComponent,HomeComponent,FooterComponent,AboutComponent, PrivacypolicyComponent, CartComponent, PlacesdetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }

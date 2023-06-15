import { Injectable, OnInit } from '@angular/core';
import { place } from '../modules/admin/components/home/place';
@Injectable({
  providedIn: 'root'
})
export class BucketserviceService {

  remove(places: place) {

    this.cart=this.cart.filter((b)=>b !=places);
   }
   cart:place[]=[];
   add(places:place)
   {
     this.cart.push(places);
     console.log(places.pname);
   }
   displaycart()
   {
 
   }
   get()
   {
     return this.cart
   }
  constructor() { }
  
  
  
}

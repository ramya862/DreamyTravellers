import { Component, OnInit } from '@angular/core';
import { BucketserviceService } from 'src/app/bucket/bucketservice.service';
import { place } from '../home/place';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartservice:BucketserviceService)
  {
  
  }
  cartItems:place[]=[];
  ngOnInit():void{
    this.cartItems=this.cartservice.get();
  }
  getcart()
  {
    return this.cartservice.get();
  }
}

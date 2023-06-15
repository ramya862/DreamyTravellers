import { Component, Input } from '@angular/core';
import { place } from '../home/place';
import { BucketserviceService } from 'src/app/bucket/bucketservice.service';

@Component({
  selector: 'app-placesdetails',
  templateUrl: './placesdetails.component.html',
  styleUrls: ['./placesdetails.component.css']
})
export class PlacesdetailsComponent {
  @Input() places:place={} as place;
  //@Output() bookEmitter=new EventEmitter<Book>();
i:number=0;
  constructor(private cartService:BucketserviceService) {}
  ngOnInit():void{}
  isIncart:boolean=false;
  addToCart(event:any)
  {
    this.isIncart=true;
    this.cartService.add(this.places);
  }
  removeFromCart()
  {
    this.isIncart=false;
    this.cartService.remove(this.places);
  }
}

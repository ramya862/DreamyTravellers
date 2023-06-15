import { Component, Input } from '@angular/core';
import { place } from './place';
import { BucketserviceService } from 'src/app/bucket/bucketservice.service';
import { PserviceService } from '../../placeservice/pservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

@Input() places:place={} as place;
  //@Output() bookEmitter=new EventEmitter<Book>();
constructor(private pService: PserviceService )
  {

  }
  books:place[]=[];
isDisabled:boolean=false;
isShowing:boolean=true;
handleClick()
{
  alert("Dispalyed all the items");
}
names:string=""
toggleBooks()
{
  this.isShowing=!this.isShowing;
}
addToCart(event:any)
{
  console.log(event)
}
ngOnInit():void{
  this.books=this.pService.getPlace();
}

}

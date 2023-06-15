import { Injectable } from '@angular/core';
import { place } from '../components/home/place';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  constructor() { }
  getPlace():place[]{
    return[

    {pname:"charminar",
    location:"old city hyderabad",
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3c/cd/c2/caption.jpg?w=300&h=300&s=1",isIncart:false},
    {pname:"Golconda",
    location:"Sultan Bazar",isIncart:false,
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a3/62/98/golkonda-fort.jpg?w=500&h=400&s=1"},
    {pname:"Nehuru Zoological Park",
    location:"Lingampally",isIncart:false,
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/51/16/34/nehru-zoological-park.jpg?w=500&h=-1&s=1"},
    
    
    {pname:"Chowmahalla palace",
    location:"old city hyderabad",isIncart:false,
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/3a/96/42/chowmahalla-palace.jpg?w=500&h=-1&s=1"},
    {pname:"shri Jaganatha Temple",isIncart:false,
    location:"banjara hills",

    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/43/79/39/the-gleaming-temple.jpg?w=500&h=-1&s=1"},
    {pname:"chilkur Balaji Temple",isIncart:false,
    location:"Chikur",
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/b3/ae/adorable-place.jpg?w=500&h=-1&s=1"}
  ];}
}

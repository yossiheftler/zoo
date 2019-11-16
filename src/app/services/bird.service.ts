import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor() { }

birds=[
  { name:'owl', size: 'small', lifeSpan:'10y', habitat:'israel', img:'https://fsmedia.imgix.net/23/71/34/22/4a78/4ef4/af29/45d851d10b69/an-owl-taking-flight.gif#image' },
  { name:'parrot', size: 'small', lifeSpan:'10y', habitat:'us', img:'https://thumbs.gfycat.com/MatureSeparateHoiho-size_restricted.gif' },
  { name:'falcon', size: 'meduin', lifeSpan:'20y', habitat:'Africa Desert' , img:'https://media1.giphy.com/media/Qy2wmxsj4Wt8c/source.gif'},
  { name:'Peacock', size: 'large', lifeSpan:'19y', habitat:'africa', img:'https://thumbs.gfycat.com/AcademicQuarrelsomeButterfly-size_restricted.gif' },
  { name:'eagle', size: 'extra large', lifeSpan:'25m', habitat:'Namibia' , img:'https://i.pinimg.com/originals/73/97/32/73973232d5f03bbc6bda70c0055cf552.gif'},
]

currentBirdIndex = 0;
currentBird = this.birds[this.currentBirdIndex];


  }

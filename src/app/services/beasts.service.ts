import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { }
  beasts=[
    { name:'cow', size: 'extra large', lifeSpan:'25y', habitat:'holand', img:'https://www.npr.org/assets/img/2014/02/27/CowPyschology.gif' },
    { name:'ram', size: 'meduin', lifeSpan:'1y', habitat:'africa', img:'https://i.imgur.com/2YnpQ3b.gif' },
    { name:'sheep', size: 'meduin', lifeSpan:'15y', habitat:'israel' , img:'https://i.pinimg.com/originals/3f/08/1a/3f081acd0340376a6d2adb7e579ddb28.gif'},
    { name:'goat', size: 'small', lifeSpan:'5y', habitat:'brazil', img:'https://bestgifsdotnet.files.wordpress.com/2014/06/goat-on-a-playground.gif' },
    { name:'donkey', size: ' extra small', lifeSpan:'5m', habitat:'hevron' , img:'https://thumbs.gfycat.com/UnripeCaringGermanshorthairedpointer-size_restricted.gif'},
  ]

  currentBeastsIndex = 0
  currentBeast = this.beasts[this.currentBeastsIndex]
}

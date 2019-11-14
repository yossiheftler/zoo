import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  [x: string]: any;
  constructor() { }
  wildAnimals=[
    { name:'lion', size: ' large', lifeSpan:'35y', habitat:'safary', img:'https://media1.tenor.com/images/8e28f7c1785ead56b6634dd97d8770a5/tenor.gif?itemid=14416692' },
    { name:'cheetah', size: 'extra meduin', lifeSpan:'40y', habitat:'zambia', img:'https://media1.tenor.com/images/1ff0836e67c9794f5594486f52b59880/tenor.gif?itemid=4550919' },
    { name:'elephant', size: 'extra large', lifeSpan:'15y', habitat:'south africa' , img:'https://i.pinimg.com/originals/17/8b/1c/178b1cb6bf764c03185686e053e518bd.gif'},
    { name:'beer', size: 'meduim', lifeSpan:'95y', habitat:'alaska', img:'https://rebelzgames.com/wp-content/uploads/2019/05/giphy-3.gif' },
    { name:'pony', size: 'small', lifeSpan:'15m', habitat:'switzerland' , img:'https://i.pinimg.com/originals/87/93/a2/8793a2cd93b06124d8dda46e9afdda0c.gif'},
  ]

  currentWildIndex = 0
  currentWild = this.wildAnimals[this.currentWildIndex]
}

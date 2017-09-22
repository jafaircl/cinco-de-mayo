import { Component, OnInit, AfterViewInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';

import { ContentSlideInUpAnimation } from '../../shared/animations/content-slide-in-up.animation';

@Component({
  selector: 'app-tinder-swiper',
  templateUrl: './tinder-swiper.component.html',
  styleUrls: ['./tinder-swiper.component.scss'],
  animations: [ContentSlideInUpAnimation],
  host: { '[@ContentSlideInUpAnimation]': '' }
})
export class TinderSwiperComponent implements OnInit, AfterViewInit {

  @ViewChild('stack') swingStack: SwingStackComponent;
  @ViewChildren('cards') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any> = [];
  stackConfig: StackConfig;
  currentCard = 0;

  constructor(private router: Router) {
    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => 900
    };

    for (let i = 0; i < 1; i++) {
      this.currentCard++;
      this.cards.push({
        name: 'Cinco de Mayo',
        date: 2018,
        img: `url(${this.getKittenUrl()})`,
        text: `We're getting married! Swipe right to join us!`
      });
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.currentCard = this.swingStack.cards.length - 1;
    this.swingStack.throwout.subscribe((event: ThrowEvent) => {
      this.currentCard--;
      console.log(this.currentCard);
      if (this.currentCard < 0) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  /*onThrowOut(event: ThrowEvent) {
    console.log(this.currentCard);
    // console.log('Hook from the template', event.throwDirection);
    if (this.currentCard < 1) {
      this.router.navigateByUrl('/');
    }
  }*/

  like() {
    if (this.currentCard > 0) {
      const card = this.swingStack.cards[this.currentCard].getCard();
      card.throwOut(10000, 1);
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  getKittenUrl() {
    const w = 500 - Math.floor((Math.random() * 100) + 1);
    const h = 500 - Math.floor((Math.random() * 100) + 1);
    return `http://placekitten.com/${w}/${h}`;
  }

}

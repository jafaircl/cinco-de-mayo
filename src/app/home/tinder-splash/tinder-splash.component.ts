import { Component, OnInit } from '@angular/core';

import { FullScreenSplashAnimation } from '../../shared/animations/full-screen-splash.animation';

@Component({
  selector: 'app-tinder-splash',
  templateUrl: './tinder-splash.component.html',
  styleUrls: ['./tinder-splash.component.scss'],
  animations: [FullScreenSplashAnimation],
  host: { '[@FullScreenSplashAnimation]': '' }
})
export class TinderSplashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

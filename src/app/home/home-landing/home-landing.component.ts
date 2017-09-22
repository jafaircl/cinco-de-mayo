import { Component, OnInit } from '@angular/core';

import { ContentSlideInUpAnimation } from '../../shared/animations/content-slide-in-up.animation';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
  animations: [ContentSlideInUpAnimation],
  host: { '[@ContentSlideInUpAnimation]': '' }
})
export class HomeLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

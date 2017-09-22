import { Component, OnInit } from '@angular/core';

import { FullScreenSplashExitAnimation } from '../../shared/animations/full-screen-splash-exit.animation';

import { MapService } from '../../shared/services/map.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss'],
  animations: [FullScreenSplashExitAnimation],
  host: { '[@FullScreenSplashExitAnimation]': '' }
})
export class MapDetailComponent implements OnInit {

  constructor(public map: MapService) { }

  ngOnInit() {
  }

}

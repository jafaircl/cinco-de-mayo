import { Component, OnInit, Input } from '@angular/core';

import { ToolbarFlipAnimation } from '../../../animations/toolbar-flip.animation';

@Component({
  selector: 'app-map-detail-toolbar',
  templateUrl: './map-detail-toolbar.component.html',
  styleUrls: ['./map-detail-toolbar.component.scss'],
  animations: [ToolbarFlipAnimation],
  host: { '[@ToolbarFlipAnimation]': '' }
})
export class MapDetailToolbarComponent implements OnInit {

  @Input()
  sidenav: any;

  @Input()
  location: any;

  @Input()
  router: any;

  constructor() { }

  ngOnInit() {
  }

  logger() {
    console.log(location);
  }

}

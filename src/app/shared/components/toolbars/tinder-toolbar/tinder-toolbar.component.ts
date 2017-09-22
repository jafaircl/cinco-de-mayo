import { Component, OnInit, Input } from '@angular/core';

import { ToolbarFlipAnimation } from '../../../animations/toolbar-flip.animation';

@Component({
  selector: 'app-tinder-toolbar',
  templateUrl: './tinder-toolbar.component.html',
  styleUrls: ['./tinder-toolbar.component.scss'],
  animations: [ToolbarFlipAnimation],
  host: { '[@ToolbarFlipAnimation]': '' }
})
export class TinderToolbarComponent implements OnInit {
  @Input()
  sidenav: any;

  @Input()
  location: any;

  @Input()
  router: any;

  constructor() { }

  ngOnInit() {
  }

}

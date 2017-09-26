import { Component, OnInit, Input } from '@angular/core';

import { ToolbarFlipAnimation } from '../../../animations/toolbar-flip.animation';

@Component({
  selector: 'app-playlist-toolbar',
  templateUrl: './playlist-toolbar.component.html',
  styleUrls: ['./playlist-toolbar.component.scss'],
  animations: [ToolbarFlipAnimation],
  host: { '[@ToolbarFlipAnimation]': '' }
})
export class PlaylistToolbarComponent implements OnInit {
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

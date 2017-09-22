import { Component, OnInit, Input } from '@angular/core';

import { ToolbarFlipAnimation } from '../../../animations/toolbar-flip.animation';

@Component({
  selector: 'app-default-toolbar',
  templateUrl: './default-toolbar.component.html',
  styleUrls: ['./default-toolbar.component.scss'],
  animations: [ToolbarFlipAnimation],
  host: { '[@ToolbarFlipAnimation]': '' }
})
export class DefaultToolbarComponent implements OnInit {
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

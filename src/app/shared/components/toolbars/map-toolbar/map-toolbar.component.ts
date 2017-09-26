import { Component, OnInit, Input } from '@angular/core';

import { ToolbarFlipAnimation } from '../../../animations/toolbar-flip.animation';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-map-toolbar',
  templateUrl: './map-toolbar.component.html',
  styleUrls: ['./map-toolbar.component.scss'],
  animations: [ToolbarFlipAnimation],
  host: { '[@ToolbarFlipAnimation]': '' }
})
export class MapToolbarComponent implements OnInit {
  @Input()
  sidenav: any;

  @Input()
  location: any;

  @Input()
  router: any;

  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

  filterClick(value) {
    // console.log(value);
    this.shared._mapFilter = value;
    // console.log(this.shared.mapFilter);
  }

}

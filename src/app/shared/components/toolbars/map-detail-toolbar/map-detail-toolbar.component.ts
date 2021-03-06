import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from '../../../services/shared.service';
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

  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

  logger() {
  }

  goBack() {
    if (this.shared.hasPrev) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/map');
    }
  }

}

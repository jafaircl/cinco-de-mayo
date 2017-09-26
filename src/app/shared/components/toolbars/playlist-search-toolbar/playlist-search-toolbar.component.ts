import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from '../../../services/shared.service';
import { ToolbarFlipAnimation } from '../../../animations/toolbar-flip.animation';

@Component({
  selector: 'app-playlist-search-toolbar',
  templateUrl: './playlist-search-toolbar.component.html',
  styleUrls: ['./playlist-search-toolbar.component.scss'],
  animations: [ToolbarFlipAnimation],
  host: { '[@ToolbarFlipAnimation]': '' }
})
export class PlaylistSearchToolbarComponent implements OnInit {
  @Input()
  sidenav: any;

  @Input()
  location: any;

  @Input()
  router: any;

  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
    /*if (this.shared.hasPrev) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/playlist');
    }*/
  }

}

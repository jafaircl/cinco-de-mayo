import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-toolbar',
  templateUrl: './playlist-toolbar.component.html',
  styleUrls: ['./playlist-toolbar.component.scss']
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

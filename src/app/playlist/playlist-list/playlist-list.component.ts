import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../shared/services/playlist.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  allSongs: object[];

  constructor(public playlist: PlaylistService) { }

  ngOnInit() {
    this.playlist.songs().subscribe(({data, loading}: any) => {
      this.allSongs = data.allSongs;
    });
  }

}

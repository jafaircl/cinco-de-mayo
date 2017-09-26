import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlaylistService } from '../../shared/services/playlist.service';

import { ContentSlideInRightAnimation } from '../../shared/animations/content-slide-in-right.animation';
@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  animations: [ContentSlideInRightAnimation],
  host: { '[@ContentSlideInRightAnimation]': '' }
})
export class PlaylistListComponent implements OnInit {
  // allSongs: object[];
  allSongs: FirebaseListObservable<any>;

  constructor(public playlist: PlaylistService) { }

  ngOnInit() {
    /*this.playlist.songs().subscribe(({data, loading}: any) => {
      this.allSongs = data.allSongs;
    });*/

    /* this.playlist.addSong({
      artist: 'Taylor Swift',
      name: 'Look What You Made Me Do',
      imageUrl: 'http://is4.mzstatic.com/image/thumb/Music118/v4/f8/71/ff/f871ff49-65a8-0827-c4f5-e3e77e51ce75/source/100x100bb.jpg'
    }); */

    this.allSongs = this.playlist.songList();
  }

}

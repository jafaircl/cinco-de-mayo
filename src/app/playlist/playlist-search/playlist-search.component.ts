import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { Subject } from 'rxjs/Subject';

import { PlaylistService } from '../../shared/services/playlist.service';

@Component({
  selector: 'app-playlist-search',
  templateUrl: './playlist-search.component.html',
  styleUrls: ['./playlist-search.component.scss']
})
export class PlaylistSearchComponent implements OnInit {
  results: any[];
  text: string;
  searchTerm$ = new Subject<string>();

  constructor(public playlist: PlaylistService, private loc: Location) { }

  ngOnInit() {
    this.playlist.search(this.searchTerm$)
                 .subscribe(results => {
      this.results = results['results'];
    });
  }

  pushSong(song) {
    this.playlist.addSong({
      artist: song.artistName,
      name: song.trackName,
      imageUrl: song.artworkUrl60
    }).then(() => this.loc.back());
  }

  /*
  search(str) {
    this.playlist.search(str)
                 .subscribe(res => this.results = res['results']);
  }

  logger() {
    console.log(this.text);
  }*/

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlaylistService {

  constructor(public http: HttpClient, public db: AngularFireDatabase) { }

  songList(): FirebaseListObservable<any> {
    return this.db.list('/songs');
  }

  addSong(data) {
    return this.songList().push(data);
  }

  /*search(str) {
    return this.http.get(`https://itunes.apple.com/search?term=${this.slugify(str)}`);
  }*/

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchMap(term));
  }

  searchMap(term) {
    return this.http.get(`https://itunes.apple.com/search?term=${this.slugify(term)}`)
                    .map(res => res);
  }

  slugify(text) {
    return text.toString().toLowerCase().trim()
    .replace(/&/g, '+and+')         // Replace & with 'and'
    .replace(/[\s\W-]+/g, '+');     // Replace spaces, non-word characters and dashes with a single plus (+)
  }
}

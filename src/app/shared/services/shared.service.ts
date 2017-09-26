import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SharedService {
  _mapFilter = '';
  hasPrev = false;

  constructor(public router: Router) {
    this.router.events.subscribe(event => this.hasPrev === true);
  }

  get mapFilter() {
    // return this._mapFilter;
    return Observable.interval(100)
                     .map(() => this._mapFilter)
                     .distinctUntilChanged();
  }

  /* set mapFilter(value) {
    this._mapFilter = value;
  }*/

}

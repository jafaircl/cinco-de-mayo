import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  _mapFilter = '';

  constructor() { }

  get mapFilter() {
    return this._mapFilter;
  }

  set mapFilter(value) {
    this._mapFilter = value;
  }

}

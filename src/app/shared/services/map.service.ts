import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
  _selected: any;
  _offsetX: number;

  constructor() { }

  get selected() {
    return this._selected;
  }

  set selected(data) {
    this._selected = data;
  }

  get offsetX() {
    return this._offsetX;
  }

  set offsetX(data) {
    this._offsetX = data;
  }
}

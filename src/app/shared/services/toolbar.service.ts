import { Injectable, EventEmitter, Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { DefaultToolbarComponent } from '../components/toolbars/default-toolbar/default-toolbar.component';

@Injectable()
export class ToolbarService {
  _toolbar: any;
  events: EventEmitter<any> = new EventEmitter();
  default = DefaultToolbarComponent;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.toolbar = this.default;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toolbar = this.getToolbar(route.snapshot);
      }
    });
  }

  getToolbar(snapshot) {
    if (snapshot && snapshot.children && snapshot.children.length > 0) {
      return this.getToolbar(snapshot.children[0]);
    } else if (snapshot.data && snapshot.data.toolbar) {
      return snapshot.data.toolbar;
    } else {
      return this.default;
    }
  }

  get toolbar() {
    return this._toolbar;
  }

  set toolbar(input) {
    this._toolbar = input;
    this.events.emit(this.toolbar);
  }
}

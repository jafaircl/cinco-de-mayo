import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';

import { SharedService } from './shared.service';

@Injectable()
export class MapService {
  _selected: any;
  _offsetX: number;

  constructor(public apollo: Apollo, private shared: SharedService) { }

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

  locations() {
    const query = {
      query: gql`
        query allLocations {
          allLocations {
            address
            description
            emoji
            id
            imageUrl
            lat
            lng
            name
            phone
            tags
            website
          }
        }
      `
    };
    return this.apollo.watchQuery(query);
  }
}

import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';

const wsClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj7v6o5pz0org0173odgh83qq', {
  timeout: 10000,
  reconnect: true
});

@Injectable()
export class PlaylistService {

  constructor(public apollo: Apollo) { }

  songs() {
    const query = {
      query: gql`
        query allSongs {
          allSongs {
            artist
            imageUrl
            name
          }
        }
      `
    };
    return this.apollo.watchQuery(query);
  }
}

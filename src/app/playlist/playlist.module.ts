import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdFormFieldModule, MdInputModule } from '@angular/material';

import { IconPlay, IconPlus } from 'angular-feather';
// import { ApolloClient, createNetworkInterface } from 'apollo-client';
// import { ApolloModule } from 'apollo-angular';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../shared/shared.module';
import { PlaylistService } from '../shared/services/playlist.service';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistSearchComponent } from './playlist-search/playlist-search.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistPlayerComponent } from './playlist-player/playlist-player.component';

/* by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj7v6o5pz0org0173odgh83qq'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}*/

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    PlaylistRoutingModule,
    // ApolloModule.forRoot(provideClient),
    AngularFireDatabaseModule,
    MdFormFieldModule,
    MdInputModule,
    IconPlay,
    IconPlus
  ],
  declarations: [PlaylistListComponent, PlaylistSearchComponent, PlaylistDetailComponent, PlaylistPlayerComponent],
  providers: [PlaylistService]
})
export class PlaylistModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { SwiperModule } from 'angular2-useful-swiper';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { IconGlobe, IconMapPin, IconPhone } from 'angular-feather';

import { SharedModule } from '../shared/shared.module';
import { MapService } from '../shared/services/map.service';

import { MapRoutingModule } from './map-routing.module';
import { MapListComponent } from './map-list/map-list.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapSearchComponent } from './map-search/map-search.component';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj7v6o5pz0org0173odgh83qq'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqX_qkz-L2C8RGuIn-B4qU55WHKH48Iww'
    }),
    SwiperModule,
    ApolloModule.forRoot(provideClient),
    IconGlobe,
    IconMapPin,
    IconPhone
  ],
  declarations: [MapListComponent, MapDetailComponent, MapSearchComponent],
  providers: [MapService]
})
export class MapModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Subscription } from 'rxjs/Subscription';

import { FullScreenSplashExitAnimation } from '../../shared/animations/full-screen-splash-exit.animation';

import { MapService } from '../../shared/services/map.service';
import { SharedService } from '../../shared/services/shared.service';


const AllLocationsQuery = gql`
query allLocations {
  allLocations {
    id
    emoji
    imageUrl
    lat
    lng,
    name,
    tags
  }
}
`;

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss'],
  animations: [FullScreenSplashExitAnimation],
  host: { '[@FullScreenSplashExitAnimation]': '' }
})
export class MapDetailComponent implements OnInit {
  locationSub: Subscription;
  location: any;

  constructor(public map: MapService,
              private apollo: Apollo,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.map.selected) {
      this.location = this.map.selected;
    } else {
      this.locationSub = this.map
                             .locations()
                             .subscribe(({data, loading}: any) => {

        this.location = data.allLocations
                            .filter(location => {
                              return location.id === this.route.snapshot.params.id;
                            })[0];
      });
    }
  }

  lyftUrl() {
    const clientId = '6yOwnbZzWZkN';
    const base = `https://lyft.com/ride?id=lyft&partner=${clientId}`;
    const url = `${base}&destination[latitude]=${this.location.lat}&destination[longitude]=${this.location.lng}`;
    return encodeURI(url);
  }

  uberUrl() {
    const clientId = 'icZ9D43sdKjnoMUavJ-eTfi751JpFvmk';
    const base = `https://m.uber.com/ul/?client_id=${clientId}&action=setPickup`;
    const url = `${base}&dropoff[latitude]=${this.location.lat}&dropoff[longitude]=${this.location.lng}&dropoff[nickname]=${this.location.name}`;
    return encodeURI(url);
  }

}

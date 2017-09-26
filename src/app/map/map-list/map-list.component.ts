import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Router } from '@angular/router';

import { SwiperComponent } from 'angular2-useful-swiper';
import { GoogleMapsAPIWrapper } from '@agm/core';

import { FullScreenSplashEntryAnimation } from '../../shared/animations/full-screen-splash-entry.animation';
import { MapService } from '../../shared/services/map.service';
import { SharedService } from '../../shared/services/shared.service';
import { mapStyles } from '../map.styles';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  animations: [FullScreenSplashEntryAnimation],
  host: { '[@FullScreenSplashEntryAnimation]': '' }
})
export class MapListComponent implements OnInit, OnDestroy {
  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  lat = 35.7887007;
  lng = -78.6409295;
  aspectHeight = 56.25;
  animationDuration = 375;
  cards: any[] = [];
  allLocations: any;
  loading = true;
  config = {
    slidesPerView: 'auto',
    // centeredSlides: true,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    spaceBetween: 16,
    keyboardControl: true,
    mousewheelControl: true,
    simulateTouch: true,
    onSlideChangeEnd: event => {
      this.lat = this.cards[event.activeIndex].lat;
      this.lng = this.cards[event.activeIndex].lng;
    },
    // have to call in a set timeout for some stupid reason
    // to not throw ExpressionChangedAfterItHasBeenCheckedError
    // See https://github.com/scttcper/ngx-toastr/issues/160
    onTransitionEnd: event => setTimeout(() => this.map.offsetX = event.getWrapperTranslate('x'))
  };
  mapStyle = mapStyles;

  constructor(private map: MapService,
              private shared: SharedService,
              private animationBuilder: AnimationBuilder,
              private router: Router) {
    /*for (let i = 0; i < 10; i++) {
      this.cards.push({
        lat: 51.678418,
        lng: 7.809007,
        img: this.getKittenUrl(),
        // img: `url(${this.getKittenUrl()})`,
        title: `Lorem Ipsum`,
        slug: `post-${i}`
      });
    }
    this.allLocationsSub = this.apollo.watchQuery({
      query: AllLocationsQuery
    }).subscribe(({data, loading}: any) => {
      this.allLocations = data.allLocations;
      this.watchFilter();
      /*this.cards = this.allLocations;
      this.allLocations.forEach(location => {
        this.cards.push({
          lat: location.lat,
          lng: location.lng,
          img: location.imageUrl,
          title: location.name,
          slug: location.id,
          tags: location.tags
        });
      });
      this.loading = loading;
      // this.usefulSwiper.swiper.update();
    });*/
  }

  ngOnInit() {
    this.map.locations().subscribe(({data, loading}: any) => {
      this.allLocations = data.allLocations;
      this.watchFilter();
      this.loading = loading;
    });
  }

  watchFilter() {
    this.shared.mapFilter.subscribe(filter => {
      if (filter === '') {
        this.cards = this.allLocations;
      } else {
        this.cards = this.allLocations.filter(location => location.tags.includes(filter));
      }
      if (this.usefulSwiper) {
        this.usefulSwiper.swiper.update();
      }
    });
  }

  setData(data) {
    this.map.selected = data;
    this.buildAnimation(this.placeholder.nativeElement).play();
  }

  buildAnimation(target): AnimationPlayer {
    const animation = this.animationBuilder.build([
      animate(`${this.animationDuration}ms ease-in-out`, style({
        height: `calc(100% - ${this.aspectHeight}vw)`
      }))
    ]);
    return animation.create(target);
  }

  markerClick(i) {
    this.lat = this.cards[i].lat;
    this.lng = this.cards[i].lng;
    this.usefulSwiper.swiper.slideTo(i);
  }

  ngOnDestroy() {
    // this.allLocationsSub.unsubscribe();
  }
  /*getKittenUrl() {
    const w = 500 - Math.floor((Math.random() * 100) + 1);
    const h = 500 - Math.floor((Math.random() * 100) + 1);
    return `http://placekitten.com/${w}/${h}`;
  }*/
}

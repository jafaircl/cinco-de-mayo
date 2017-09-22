import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwingModule } from 'angular2-swing';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { TinderSplashComponent } from './tinder-splash/tinder-splash.component';
import { TinderSwiperComponent } from './tinder-swiper/tinder-swiper.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';

@NgModule({
  imports: [
    SharedModule,
    SwingModule,
    HomeRoutingModule
  ],
  declarations: [TinderSplashComponent, TinderSwiperComponent, HomeLandingComponent]
})
export class HomeModule { }

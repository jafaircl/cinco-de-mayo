import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinderSplashComponent } from './tinder-splash/tinder-splash.component';
import { TinderSwiperComponent } from './tinder-swiper/tinder-swiper.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';

import { BlankToolbarComponent } from '../shared/components/toolbars/blank-toolbar/blank-toolbar.component';
import { TinderToolbarComponent } from '../shared/components/toolbars/tinder-toolbar/tinder-toolbar.component';
import { DefaultToolbarComponent } from '../shared/components/toolbars/default-toolbar/default-toolbar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TinderSplashComponent,
    data: {
      toolbar: BlankToolbarComponent
    }
  }, {
    path: 'swipe',
    component: TinderSwiperComponent,
    data: {
      toolbar: TinderToolbarComponent
    }
  }, {
    path: 'home',
    component: HomeLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

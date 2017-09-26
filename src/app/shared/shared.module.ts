import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule
} from '@angular/material';

import {
  IconFacebook,
  IconFilter,
  IconHome,
  IconMenu,
  IconSearch,
  IconTwitter,
  IconX
} from 'angular-feather';



import { ToolbarService } from './services/toolbar.service';
import { SharedService } from './services/shared.service';
import { DefaultToolbarComponent } from './components/toolbars/default-toolbar/default-toolbar.component';
import { BlankToolbarComponent } from './components/toolbars/blank-toolbar/blank-toolbar.component';
import { TinderToolbarComponent } from './components/toolbars/tinder-toolbar/tinder-toolbar.component';
import { MapToolbarComponent } from './components/toolbars/map-toolbar/map-toolbar.component';
import { ExplodeAnimationDirective } from './directives/explode-animation.directive';
import { MapDetailToolbarComponent } from './components/toolbars/map-detail-toolbar/map-detail-toolbar.component';
import { PlaylistToolbarComponent } from './components/toolbars/playlist-toolbar/playlist-toolbar.component';
import { PlaylistSearchToolbarComponent } from './components/toolbars/playlist-search-toolbar/playlist-search-toolbar.component';



@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    IconFacebook,
    IconFilter,
    IconHome,
    IconMenu,
    IconSearch,
    IconTwitter,
    IconX
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    IconFacebook,
    IconFilter,
    IconHome,
    IconMenu,
    IconSearch,
    IconTwitter,
    IconX,
    ExplodeAnimationDirective
  ],
  declarations: [
    DefaultToolbarComponent,
    BlankToolbarComponent,
    TinderToolbarComponent,
    MapToolbarComponent,
    ExplodeAnimationDirective,
    MapDetailToolbarComponent,
    PlaylistToolbarComponent,
    PlaylistSearchToolbarComponent
  ]
})
export class SharedModule { }

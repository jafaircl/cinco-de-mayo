import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/services/shared.service';
import { ToolbarService } from './shared/services/toolbar.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DefaultToolbarComponent } from './shared/components/toolbars/default-toolbar/default-toolbar.component';
import { TinderToolbarComponent } from './shared/components/toolbars/tinder-toolbar/tinder-toolbar.component';
import { BlankToolbarComponent } from './shared/components/toolbars/blank-toolbar/blank-toolbar.component';
import { MapToolbarComponent } from './shared/components/toolbars/map-toolbar/map-toolbar.component';
import { MapDetailToolbarComponent } from './shared/components/toolbars/map-detail-toolbar/map-detail-toolbar.component';
import { PlaylistToolbarComponent } from './shared/components/toolbars/playlist-toolbar/playlist-toolbar.component';
import { PlaylistSearchToolbarComponent } from './shared/components/toolbars/playlist-search-toolbar/playlist-search-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SharedService, ToolbarService],
  bootstrap: [AppComponent],
  entryComponents: [
    DefaultToolbarComponent,
    TinderToolbarComponent,
    BlankToolbarComponent,
    MapToolbarComponent,
    MapDetailToolbarComponent,
    PlaylistToolbarComponent,
    PlaylistSearchToolbarComponent
  ]
})
export class AppModule { }

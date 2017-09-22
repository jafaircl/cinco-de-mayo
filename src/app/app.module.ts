import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [SharedService, ToolbarService],
  bootstrap: [AppComponent],
  entryComponents: [
    DefaultToolbarComponent,
    TinderToolbarComponent,
    BlankToolbarComponent,
    MapToolbarComponent,
    MapDetailToolbarComponent
  ]
})
export class AppModule { }

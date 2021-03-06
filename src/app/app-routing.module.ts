import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultToolbarComponent } from './shared/components/toolbars/default-toolbar/default-toolbar.component';
import { TinderToolbarComponent } from './shared/components/toolbars/tinder-toolbar/tinder-toolbar.component';
import { MapToolbarComponent } from './shared/components/toolbars/map-toolbar/map-toolbar.component';
import { PlaylistToolbarComponent } from './shared/components/toolbars/playlist-toolbar/playlist-toolbar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule',
    data: {
      toolbar: DefaultToolbarComponent
    }
  }, {
    path: 'map',
    loadChildren: 'app/map/map.module#MapModule',
    data: {
      toolbar: MapToolbarComponent
    }
  }, {
    path: 'playlist',
    loadChildren: 'app/playlist/playlist.module#PlaylistModule',
    data: {
      toolbar: PlaylistToolbarComponent
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

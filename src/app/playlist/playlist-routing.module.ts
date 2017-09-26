import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistSearchComponent } from './playlist-search/playlist-search.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistPlayerComponent } from './playlist-player/playlist-player.component';

import { PlaylistSearchToolbarComponent } from '../shared/components/toolbars/playlist-search-toolbar/playlist-search-toolbar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PlaylistListComponent
  }, {
    path: 'player',
    component: PlaylistPlayerComponent
  }, {
    path: 'search',
    component: PlaylistSearchComponent,
    data: {
      toolbar: PlaylistSearchToolbarComponent
    }
  }, {
    path: ':id',
    component: PlaylistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }

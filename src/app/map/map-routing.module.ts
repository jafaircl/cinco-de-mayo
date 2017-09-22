import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapDetailToolbarComponent } from '../shared/components/toolbars/map-detail-toolbar/map-detail-toolbar.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapSearchComponent } from './map-search/map-search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MapListComponent
  }, {
    path: 'search',
    component: MapSearchComponent
  }, {
    path: ':id',
    component: MapDetailComponent,
    data: {
      toolbar: MapDetailToolbarComponent
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }

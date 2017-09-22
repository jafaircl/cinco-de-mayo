import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { SwiperModule, SwiperComponent } from 'angular2-useful-swiper';

import { MapListComponent } from './map-list.component';

import { MapService } from '../../shared/services/map.service';
import { SharedService } from '../../shared/services/shared.service';

describe('MapListComponent', () => {
  let component: MapListComponent;
  let fixture: ComponentFixture<MapListComponent>;
  const Swiper = SwiperComponent.prototype.swiper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        AgmCoreModule.forRoot(),
        SwiperModule,
        MdCardModule
      ],
      declarations: [ MapListComponent ],
      providers: [ MapService, SharedService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

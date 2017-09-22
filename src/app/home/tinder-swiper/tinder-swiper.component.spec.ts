import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MdCardModule } from '@angular/material';

import { SwingModule } from 'angular2-swing';

import { SharedModule } from '../../shared/shared.module';

import { TinderSwiperComponent } from './tinder-swiper.component';

describe('TinderSwiperComponent', () => {
  let component: TinderSwiperComponent;
  let fixture: ComponentFixture<TinderSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SwingModule,
        MdCardModule
        // SharedModule
      ],
      declarations: [ TinderSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

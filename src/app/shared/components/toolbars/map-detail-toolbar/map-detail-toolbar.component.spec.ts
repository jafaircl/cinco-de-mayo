import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../../shared.module';
import { SharedService } from '../../../services/shared.service';

import { MapDetailToolbarComponent } from './map-detail-toolbar.component';

describe('MapDetailToolbarComponent', () => {
  let component: MapDetailToolbarComponent;
  let fixture: ComponentFixture<MapDetailToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule
      ],
      providers: [ SharedService ]
      // declarations: [ MapDetailToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { ToolbarService } from '../../../services/toolbar.service';
import { SharedModule } from '../../../shared.module';

import { TinderToolbarComponent } from './tinder-toolbar.component';

describe('TinderToolbarComponent', () => {
  let component: TinderToolbarComponent;
  let fixture: ComponentFixture<TinderToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule
      ],
      // declarations: [ TinderToolbarComponent ],
      // providers: [ ToolbarService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

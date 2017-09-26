import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSearchToolbarComponent } from './playlist-search-toolbar.component';

describe('PlaylistSearchToolbarComponent', () => {
  let component: PlaylistSearchToolbarComponent;
  let fixture: ComponentFixture<PlaylistSearchToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSearchToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSearchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

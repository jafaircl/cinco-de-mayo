import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarService } from './toolbar.service';
import { DefaultToolbarComponent } from '../components/toolbars/default-toolbar/default-toolbar.component';
import { TinderToolbarComponent } from '../components/toolbars/tinder-toolbar/tinder-toolbar.component';

describe('ToolbarService', () => {

  const shallowSnapshot = {
    data: {
      toolbar: DefaultToolbarComponent
    }
  };

  const deepSnapshot = {
    children: [shallowSnapshot, shallowSnapshot]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ToolbarService],
      // declarations: [DefaultToolbarComponent, TinderToolbarComponent]
    });
  });

  it('should be created', inject([ToolbarService], (service: ToolbarService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a shallow toolbar', inject([ToolbarService], (service: ToolbarService) => {
    expect(service.getToolbar(shallowSnapshot)).toEqual(DefaultToolbarComponent);
  }));

  it('should get a lazy loaded route toolbar', inject([ToolbarService], (service: ToolbarService) => {
    expect(service.getToolbar(deepSnapshot)).toEqual(DefaultToolbarComponent);
  }));

  it('should get the default toolbar', inject([ToolbarService], (service: ToolbarService) => {
    expect(service.toolbar).toEqual(DefaultToolbarComponent);
  }));

  it('should set a new toolbar', inject([ToolbarService], (service: ToolbarService) => {
    service.toolbar = TinderToolbarComponent;
    expect(service.toolbar).toEqual(TinderToolbarComponent);
  }));
});

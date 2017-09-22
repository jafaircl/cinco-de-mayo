import { Component, ComponentRef, ElementRef, Input, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ToolbarService } from '../shared/services/toolbar.service';
import { ToolbarSlideInDownAnimation } from '../shared/animations/toolbar-slide-in-down.animation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  sidenav: any;

  @Input()
  location: any;

  @Input()
  router: any;

  @ViewChild('dynamic', { read: ViewContainerRef })
  dynamic: ViewContainerRef;

  toolbarRef: ComponentRef<any>;

  constructor(private toolbar: ToolbarService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.toolbar.events.subscribe(toolbar => {
      if (this.toolbarRef) {
        this.dynamic.detach().onDestroy(() => {
          this.toolbarRef.destroy();
        });
      }
      // console.log(toolbar);
      const factory = this.resolver.resolveComponentFactory(toolbar);
      // console.log(factory);
      this.toolbarRef = this.dynamic.createComponent(factory);
      Object.assign(this.toolbarRef.instance, {
        sidenav: this.sidenav,
        location: this.location,
        router: this.router
      });
    });
  }

}

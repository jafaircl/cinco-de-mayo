import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-toolbar',
  templateUrl: './blank-toolbar.component.html',
  styleUrls: ['./blank-toolbar.component.scss']
})
export class BlankToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('blank toolbar');
  }

}

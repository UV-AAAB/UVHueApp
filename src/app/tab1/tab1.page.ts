import { Component, OnInit } from '@angular/core';

import * as homeScript from "./home"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    homeScript.execute();
  }

}

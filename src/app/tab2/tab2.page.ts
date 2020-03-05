import { Component, OnInit } from '@angular/core';


import * as settingsSwitchScript from './settings_switch'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    settingsSwitchScript.execute();
  }
}

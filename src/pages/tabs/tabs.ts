import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TimerPage } from '../timer/timer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimerPage;


  constructor() {

  }
}

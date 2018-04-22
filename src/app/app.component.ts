import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" routerLink="/network-interfaces">Network Interfaces</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/memory">Memory Usage</a>
            </li>
          </ul>
          <router-outlet></router-outlet>
        </div>
  `,
  styles: []
})
export class AppComponent {}


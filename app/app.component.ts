import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <nav>
    <div class="nav-wrapper" style="background-color:black;">
      <div class="brand-logo">&nbsp;{{title}}</div>
    </div>
  </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  title = 'Firewalls & Builds';
}

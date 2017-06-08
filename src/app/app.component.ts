import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<app-shared-header></app-shared-header>

	<app-2018-home></app-2018-home>

	<app-shared-footer></app-shared-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

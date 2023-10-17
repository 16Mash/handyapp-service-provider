import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
// home.page.ts

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

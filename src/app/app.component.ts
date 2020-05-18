import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-ng-week';

  constructor(
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.useLocalStore();
  }

  useLocalStore() {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('save', 'test');
    }
    if (isPlatformServer(this.platformId)) {
      // Server only code.
    }
  }
}

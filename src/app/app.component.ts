import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  //encapsulation: ViewEncapsulation.Native
})
export class AppComponent  {
  name = 'Angular';

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    console.log('window', e);
  }

  divScroll(e) {
    console.log('div App', e);
  }
}

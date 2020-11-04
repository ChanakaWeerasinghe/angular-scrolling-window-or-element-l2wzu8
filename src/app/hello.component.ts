import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
<div (scroll)="divScroll($event)">
  <h1>Hello {{name}}!</h1>
  S<br>  C<br>  R<br>  O<br>  L<br>  L<br>
  S<br>  C<br>  R<br>  O<br>  L<br>  L<br>
  S<br>  C<br>  R<br>  O<br>  L<br>  L<br>
</div>
  `,
  styles: [`
h1 { font-family: Lato; }
div {
  height: 300px;
  overflow-y: scroll;
}
  `]
})
export class HelloComponent  {
  @Input() name: string;
  @HostListener('scroll', ['$event'])
  onScroll(e) {
    console.log('Hello', e);
  }

  divScroll(e) {
    console.log('div Hello', e);
  }
}

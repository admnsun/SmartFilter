import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() text: string;
  title = 'Smart Filter';

  passToFilter(inputString: string) {
if (inputString.toLowerCase().indexOf('test') > 0) {
this.text = inputString.substring(0, inputString.toLowerCase().indexOf('test')) + ' OH NO YOU TYPED THE SECRET WORD!';
}
  }
}

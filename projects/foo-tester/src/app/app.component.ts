import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//asi lo jala desde el dist/foo-lib sin tener la libreria publicada,
//esto funciona 
//import { FooLibService, Show } from 'foo-lib';

import { Show, FooLibService } from 'foo-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foo-tester';
  greeting: String = '';

  show$: Observable<Show>;

  constructor(private tvmaze: FooLibService) {
    this.show$ = this.tvmaze.getShow(336);
    this.greeting = this.tvmaze.getGreetings();
  }
}

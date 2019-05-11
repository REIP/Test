import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-foo-lib',
  template: `
    <p>
      foo-lib works - Reip!
    </p>
  `,
  styles: []
})
export class FooLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

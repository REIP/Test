import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FooLibComponent],
  imports: [
    HttpClientModule,
  ],
  exports: [FooLibComponent]
})
export class FooLibModule { }

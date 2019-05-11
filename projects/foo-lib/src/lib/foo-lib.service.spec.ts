import { TestBed, inject, async } from '@angular/core/testing';

import { FooLibService } from './foo-lib.service';
import { HttpClientModule } from '@angular/common/http';

describe('FooLibService suite', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [FooLibService]
  }));

  it('should be created', () => {
    const service: FooLibService = TestBed.get(FooLibService);
    expect(service).toBeTruthy();
  });

  it('Call to function from a Service', () => {
    const service: FooLibService = TestBed.get(FooLibService);
    // expect(service).toBeTruthy();
    expect(service.getGreetings()).toEqual('Hello Pier');

  });

  // cuando se usa un observable apuntando a una API siempre es bueno poner el asycn,
  // cuando se usa un mockup no es necesario.
  it('Call to API from Service with Injection', async(inject([FooLibService], (service: FooLibService) => {
    //como no he usado operadores .map,switch no es necesario el .pipe
    service.getShow(336).pipe().subscribe(data => expect(data.id).toEqual(336));
    //service.getShow(336).subscribe(data => expect(data.id).toEqual(336));
  })));


  it('Call to API from Service with TestBed', async(() => {
    const service: FooLibService = TestBed.get(FooLibService);
    let id: number = 0;

    //como no he usado operadores .map,switch no es necesario el .pipe
    /*service.getShow(336).pipe().subscribe(
      data => expect(data.id).toEqual(336)
    ); */

    service.getShow(336).subscribe(
      data => expect(data.id).toEqual(336)
    );
  }));
});

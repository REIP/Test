import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './foo-lib.model';
export declare class FooLibService {
    private http;
    private readonly apiRoot;
    constructor(http: HttpClient);
    getShow(id: number): Observable<Show>;
    getGreetings(): String;
}

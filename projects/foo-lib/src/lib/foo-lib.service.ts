import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './foo-lib.model';

@Injectable({
  providedIn: 'root'
})
export class FooLibService {

  private readonly apiRoot = 'https://api.tvmaze.com';
  //https://api.github.com
  constructor(private http:HttpClient) { }

  getShow(id:number):Observable<Show>
  {
    const url = `${this.apiRoot}/shows/${id}`;    	
    return this.http.get<Show>(url);
  }
  
  getGreetings(): String
  {
    return "Hello Pier";
  }
}

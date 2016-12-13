import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Data } from './data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  private heroesUrl = './data.json';  // URL to web API
   constructor(private _http: Http){}
   // http.get() to GET JSON data
   getData(): Observable<Data[]> {
     return this._http.get(this.heroesUrl)
                     .map(this.extractData);
   }
   private extractData(res: Response) {
   let body = res.json();
   console.log(body.data);
   return body.data || { };
 }
}

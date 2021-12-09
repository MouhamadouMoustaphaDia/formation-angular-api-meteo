import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient ) { }
  err!: string;
  getWeather(ville: string): Observable<any>{
    return this.http.get<any>(environment.config.feedRoot + ville,{responseType:"json",observe:"body"});
  }
}
/*
.pipe(
      tap( data => {
        console.log(data);
      }),
      catchError( (err) => {
        console.log(err)
        return err;
      }));
 */

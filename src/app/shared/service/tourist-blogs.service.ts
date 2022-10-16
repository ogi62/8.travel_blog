import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TouristBlogsService {

  apiurl = 'api/users';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }
}

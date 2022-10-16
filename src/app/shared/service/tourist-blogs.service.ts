import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TouristPost } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class TouristBlogsService {

  apiurl = 'http://localhost:3000/posts';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<TouristPost[]> {
    return this.http.get<TouristPost[]>(this.apiurl);
  };
}
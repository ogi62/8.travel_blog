import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TouristPost } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class TouristBlogsService {
  apiurl = 'http://localhost:3000/posts'; // Our created Data can be accessed here at api/users
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  getPosts(): Observable<TouristPost[]> {
    return this.http.get<TouristPost[]>(this.apiurl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getPost(id: number): Observable<TouristPost> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<TouristPost>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
}

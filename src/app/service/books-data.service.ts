import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor(private http:HttpClient) { }
  fetchBooks(): Observable<any> 
  {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
  }
}

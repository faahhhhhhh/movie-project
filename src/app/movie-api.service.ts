import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInterface } from './movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  // private apiUrl = '/search/movie?api_key=08b3981b8611ae042035772aab260ebd&query=a';
  private baseurl = "https://api.themoviedb.org/3";
  private api_key = "08b3981b8611ae042035772aab260ebd";

  getMovie(): Observable<any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.api_key}&query=a`);
  }
  getSearchMovie(searchValue: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=08b3981b8611ae042035772aab260ebd&query=a&title=${searchValue}`
    )
  }

  addPrice(price: any) {
    return this.http.post(`${this.baseurl}/search/movie?api_key=${this.api_key}`, price);
  }
}
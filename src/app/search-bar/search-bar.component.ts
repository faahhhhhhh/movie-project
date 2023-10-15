import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { MovieInterface } from '../movie.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  searchValue = '';
  movies: any;
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private movieService: MovieApiService, 
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
      this.fetchData();
  }

  fetchData(): void {
    this.movieService.getSearchMovie(this.searchValue).subscribe(movies => {
      this.movies = movies;
    })
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}

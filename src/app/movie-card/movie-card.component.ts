import { Component } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  movies: any = [];
  images: any;

  constructor(private movieApiService: MovieApiService, private cartService: CartService ) {}

  ngOnInit(): void {
      this.movieApiService.getMovie().subscribe((movie) => {
        this.movies = movie.results;

        this.movies.forEach((m: any) => {
          Object.assign(m, {quantity: 1, total: m.vote_count});
        });
      });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}


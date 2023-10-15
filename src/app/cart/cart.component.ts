import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public movies: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getMovies().subscribe(movie => {
      this.movies = movie;
      this.grandTotal = this.cartService.getTotalPrice();
      if (this.movies.length > 3 && this.movies.length <= 5) {
          this.grandTotal *= 0.9;
      } else if (this.movies.length > 5) {
        this.grandTotal *= 0.8;
      }
      Math.ceil(this.grandTotal);
    })
  }

  deleteCartItem(movie: any) {
    this.cartService.deleteCartItem(movie);
  }

  emptyCart() {
    this.cartService.EmptyCart();
  }
}

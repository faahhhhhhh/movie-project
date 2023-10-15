import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public movieList = new BehaviorSubject<any>([]);
  public grandTotal: number = 0;

  constructor() { }

  getMovies() {
    return this.movieList.asObservable();
  }

  setMovie(movie: any) {
    this.cartItemList.push(...movie);
    this.movieList.next(movie);
  }

  addToCart(movie: any) {
    this.cartItemList.push(movie);
    this.movieList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((m: any) => {
      grandTotal += m.total
    })
    return grandTotal;
  }

// Remove one item
  deleteCartItem(movie: any) {
    this.cartItemList.map((m: any, index: any) => {
      if (movie.id === m.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.movieList.next(this.cartItemList);
  }

  EmptyCart() {
    this.cartItemList = [];
    this.movieList.next(this.cartItemList);
  }
}

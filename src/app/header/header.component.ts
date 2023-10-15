import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public totalItem:number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getMovies().subscribe(movie => {
      this.totalItem = movie.length;
    })
  }
}

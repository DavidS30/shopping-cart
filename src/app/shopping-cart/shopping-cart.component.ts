import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './cart-item';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  itemCount$: Observable<number> = this.shoppingCartService.itemCount$;

  cartItems$: Observable<CartItem[]> = this.shoppingCartService.cartItems$;

  total$: Observable<number> = this.shoppingCartService.total$;

  deleteItem (item: CartItem): void {
    this.shoppingCartService.deleteItem(item);
  }

  clearShoppingCart(): void {
    this.shoppingCartService.clear();
  }

  constructor(private shoppingCartService: ShoppingCartService) {}
}

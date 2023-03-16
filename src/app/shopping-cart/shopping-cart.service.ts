import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CartItem } from "./cart-item";

@Injectable({
    providedIn: "root"
})
export class ShoppingCartService {
    private cartItems = new BehaviorSubject<CartItem[]>([]);
    cartItems$ = this.cartItems.asObservable();
    
    total$: Observable<number> = this.cartItems$.pipe(
      map((items) => items.reduce((acc, {price}) => acc + price, 0))
    )

    itemCount$: Observable<number> = this.cartItems$.pipe(
      map((items) => items.length)
    )
    
    addItem(item: CartItem): void {
      this.cartItems.next([...this.cartItems.value, item]);
    }
    
    deleteItem (item: CartItem): void {
      this.cartItems.next(this.cartItems.value.filter(cartItem => cartItem !== item));
    }


    clear(): void {
      this.cartItems.next([]);
    }

  }
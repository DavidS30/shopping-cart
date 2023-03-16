import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input() cartItem!: CartItem;
  @Output() cartItemDeleted = new EventEmitter<void>();


  onDeleteClicked() : void {
    this.cartItemDeleted.emit();
  }
}

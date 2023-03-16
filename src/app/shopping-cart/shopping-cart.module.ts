import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartItemComponent } from './shopping-cart-item.component';
import { ShoppingCartComponent } from './shopping-cart.component';



@NgModule({
  declarations: [ShoppingCartComponent,ShoppingCartItemComponent,],
  imports: [
    CommonModule
  ],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }

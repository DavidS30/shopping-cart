import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shoppingCart: boolean = false;
  menuItem: boolean = false;

  showShoppingCart(): void {
    this.shoppingCart =!this.shoppingCart;
  }

  showMenuItem (): void {
    this.menuItem = true;
  }

  closeMenuItem (): void {
    this.menuItem = false;
  }

  constructor() {}
}

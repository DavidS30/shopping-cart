import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  itemCount$: Observable<number> = this.scService.itemCount$;

  @Output() eventShoppingCart = new EventEmitter();
  @Output() eventMenu = new EventEmitter();

  onClickShoppingCart(): void {
    this.eventShoppingCart.emit();
  }

  onClickMenuItem(): void {
    this.eventMenu.emit();
  }

  constructor(private scService: ShoppingCartService) { }
  
}

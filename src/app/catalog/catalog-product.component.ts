import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CatalogProduct } from './catalog-product';
import { mapProductToCartItem } from './helpers/map-product-to-cart-item.helper';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent {
  @Input() product!: CatalogProduct;

  onClickAddToCart(): void {
    this.scService.addItem(mapProductToCartItem(this.product));
  }

  navigateProductDetails(): void {
    this.router.navigate(['products', this.product.id], {'relativeTo': this.route})
  }

  constructor(private scService: ShoppingCartService, private router: Router, private route: ActivatedRoute) {}
}

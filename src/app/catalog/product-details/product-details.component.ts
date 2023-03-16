import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { CatalogProduct } from '../catalog-product';
import { CatalogService } from '../catalog.service';
import { mapProductToCartItem } from '../helpers/map-product-to-cart-item.helper';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent{

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  )
  product$: Observable<CatalogProduct | null> = this.id$.pipe(
    switchMap((id) => this.catalogService.getProduct(id)),
    tap((product) => product === null && this.router.navigate(['catalog']))
  );

  addToCart(product: CatalogProduct): void {
    const cartItem = mapProductToCartItem(product);
    this.scService.addItem(cartItem);
  }
}
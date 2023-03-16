import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
import { CatalogProduct } from "./catalog-product";
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  products$: Observable<CatalogProduct[]> = this.catalogService.products$;
  orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
    map((queryParam) => queryParam.get('orderBy'))
  );
  
  orderedProducts$: Observable<CatalogProduct[]> = combineLatest([
    this.products$,
    this.orderBy$
  ]).pipe(
    map(([products, orderBy]) => orderBy === 'price' ? [...products].sort((a, b) => a.price - b.price) : products)
  )  
  
  constructor(private catalogService: CatalogService, private route: ActivatedRoute) { }
}

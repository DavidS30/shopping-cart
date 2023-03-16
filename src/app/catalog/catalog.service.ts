import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CatalogProduct } from "./catalog-product";

@Injectable({
    providedIn: "root"
})
export class CatalogService{
    private products = new BehaviorSubject<CatalogProduct[]>(
      [
        {
          'id': 1,
          'imageUrl': 'headphones.jpg',
          'name': 'Audifonos',
          'price': 150.2
        },
        {
          'id': 2,
          'imageUrl': 'keyboard.jpg',
          'name': 'Teclado',
          'price': 100
        },
        {
          'id':3,
          'imageUrl': 'monitor.jpg',
          'name': 'Monitor',
          'price': 200
        }
      ]
    );
    products$ = this.products.asObservable();
    
    getProduct(requestId: number): Observable<CatalogProduct | null> {
    return this.products.pipe(
      map((products) => products.find((product) => product.id === requestId) || null)
    )
    }
}
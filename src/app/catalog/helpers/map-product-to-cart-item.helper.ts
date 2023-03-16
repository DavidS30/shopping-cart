import { CartItem } from "src/app/shopping-cart/cart-item";
import { CatalogProduct } from "../catalog-product";


export function mapProductToCartItem(product: CatalogProduct) : CartItem {
    const {imageUrl, name, price} = product;
    return {imageUrl, name, price};
}

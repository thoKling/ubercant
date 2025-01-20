import {ProductDto} from '../api/api.ts/Api';
import {Observable} from 'rxjs';
import {ApiService} from '../shared/api.service';

export class ShoppingList {
  readonly products$: Observable<ProductDto[]>;
  private cart: Map<ProductDto, number> = new Map();
  private api;

  constructor(api: ApiService) {
    this.api = api;
    this.products$ = this.api.getProducts();
  }

  get total() {
    return Array.from(this.cart.entries()).reduce((acc, [product, quantity]) => acc + quantity * product.price, 0).toFixed(2);
  }

  increaseQuantity(product: ProductDto) {
    this.cart.set(product, (this.cart.get(product) || 0) + 1);
  }

  decreaseQuantity(product: ProductDto) {
    if (!this.cart.has(product)) {
      return;
    }

    if (this.cart.get(product) === 1) {
      this.cart.delete(product);
      return;
    }

    this.cart.set(product, this.cart.get(product)! - 1);
  }

  getQuantity(product: ProductDto) {
    return this.cart.get(product) || 0;
  }

  makeCommand() {
    return this.api.command.makeCommand({
      products: [...this.cart.entries()].map(([product, quantity]) => ({productId: product.name, quantity})),
    });
  }
}

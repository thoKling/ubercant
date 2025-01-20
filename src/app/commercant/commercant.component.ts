import {Component, inject} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {MatButton, MatIconButton} from '@angular/material/button';
import {AsyncPipe, NgForOf} from '@angular/common';
import {ShoppingList} from './shoppingList';
import {ProductDto} from '../api/api.ts/Api';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-commercant',
  imports: [
    MatList,
    MatListItem,
    MatButton,
    MatIconButton,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './commercant.component.html',
  styleUrl: './commercant.component.scss'
})
export class CommercantComponent {
  private api: ApiService = inject(ApiService);
  private shoppingList = new ShoppingList(this.api);

  get products$() {
    return this.shoppingList.products$;
  }

  increaseQuantity(product: ProductDto) {
    this.shoppingList.increaseQuantity(product);
  }

  decreaseQuantity(product: ProductDto) {
    this.shoppingList.decreaseQuantity(product);
  }

  getQuantity(product: ProductDto) {
    return this.shoppingList.getQuantity(product);
  }

  getTotal() {
    return this.shoppingList.total;
  }

  command() {
    this.shoppingList.makeCommand();
  }
}

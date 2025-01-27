import {Component, inject} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {AsyncPipe, CurrencyPipe, NgIf} from '@angular/common';
import {ShoppingList} from './shoppingList';
import {ProductDto} from '../api/api.ts/Api';
import {ApiService} from '../shared/api.service';
import {ImagekitioAngularModule} from "imagekitio-angular";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-commercant',
  imports: [
    MatButton,
    AsyncPipe,
    CurrencyPipe,
    ImagekitioAngularModule,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatProgressSpinner,
    MatRow,
    MatRowDef,
    MatTable,
    NgIf,
    MatHeaderCellDef,
    MatIconButton
  ],
  templateUrl: './commercant.component.html',
  styleUrl: './commercant.component.scss'
})
export class CommercantComponent {
  protected imgTransformation = [{
    height: "100",
    width: "100"
  }];
  protected displayedColumns: string[] = ['name', 'description', 'price', 'quantity'];
  private api: ApiService = inject(ApiService);
  private shoppingList = new ShoppingList(this.api);

  get products$() {
    return this.shoppingList.products$;
  }

  getImgPath(product: ProductDto) {
    return (product.imgPath ?? "/tata");
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

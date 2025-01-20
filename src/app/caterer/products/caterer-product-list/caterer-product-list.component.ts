import {Component, inject} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {AsyncPipe, CurrencyPipe, NgIf} from '@angular/common';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {ProductDto} from '../../../api/api.ts/Api';
import {ProductsComponent} from '../products.component';

@Component({
  selector: 'app-caterer-product-list',
  imports: [
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatTable,
    NgIf,
    CurrencyPipe,
    AsyncPipe,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    ProductsComponent
  ],
  templateUrl: './caterer-product-list.component.html',
  styleUrl: './caterer-product-list.component.scss'
})
export class CatererProductListComponent {
  protected displayedColumns: string[] = ['name', 'description', 'price'];
  private api = inject(ApiService);
  protected products$: Observable<ProductDto[]> = this.api.getProducts();
}

import {Injectable} from '@angular/core';
import {Api, ProductDto} from '../api/api.ts/Api';
import {from, map, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: Api<any>;

  constructor() {
    this.api = new Api({baseUrl: environment.apiUrl});
  }

  get product() {
    return this.api.product;
  }

  get command() {
    return this.api.command;
  }

  getProducts(): Observable<ProductDto[]> {
    return from(this.product.getProducts()).pipe(map(response => response.data));
  }
}

import {Injectable} from '@angular/core';
import {Api, ProductDto} from '../api/api.ts/Api';
import {from, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: Api<any>;

  constructor() {
    this.api = new Api({baseUrl: "https://ubercant-server-76ed62e87ca2.herokuapp.com"});
    // local api : http://localhost:3000
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

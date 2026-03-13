import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class TopSellersApi {
  http = inject(HttpClient)

  getTopSellers() {
    const url = 'http://localhost:3000/topSellers';
    const data = this.http.get<Product[]>(url);
    console.log(data);
    return data;
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  http = inject(HttpClient)

  getProducts(category?: string) {
    let url = 'http://localhost:3000/products';
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }
    const data = this.http.get<Product[]>(url);
    console.log(data);
    return data;
  }
}

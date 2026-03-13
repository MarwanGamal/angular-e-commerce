import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class NewArrivalApi {
  http = inject(HttpClient)

  getNewArrivals() {
    const url = 'http://localhost:3000/newArrivals';
    const data = this.http.get<Product[]>(url);
    console.log(data);
    return data;
  }
}

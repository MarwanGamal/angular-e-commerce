import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductCard {
  product = input<Product>()
}

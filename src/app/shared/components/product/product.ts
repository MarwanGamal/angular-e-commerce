import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../features/cart/service/cart.service';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductCard {
  product = input<Product>();
  cartService = inject(CartService);

  addToCart() {
    const p = this.product();
    if (p) {
      this.cartService.addToCart(p).subscribe(() => {
         alert(`${p.name} added to cart!`);
      });
    }
  }
}

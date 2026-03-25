import { Component, inject, signal } from '@angular/core';
import { CartService } from './service/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  providers: []
})
export class Cart {
  cartService = inject(CartService);
  
  // Expose the signal from the service
  cartItems = this.cartService.cartItems;

  ngOnInit() {
    this.cartService.getCartItems().subscribe();
  }

  get subtotal() {
    return this.cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  get discount() {
    return this.subtotal * 0.2; // 20% discount as requested
  }

  get deliveryFee() {
    return 15; // Fixed fee as requested
  }

  get total() {
    return this.subtotal - this.discount + this.deliveryFee;
  }

  updateQuantity(id: string | number, newQuantity: number) {
      if(newQuantity > 0) {
        this.cartService.updateQuantity(id.toString(), newQuantity).subscribe();
      }
  }

  removeItem(id: string | number) {
    this.cartService.removeFromCart(id.toString()).subscribe();
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item.model';
import { Product } from '../../../shared/models/product.model';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  http = inject(HttpClient);
  cartItems = signal<CartItem[]>([]);

  private apiUrl = 'http://localhost:3000/cart';

  getCartItems() {
    return this.http.get<CartItem[]>(this.apiUrl).pipe(
      tap((items) => this.cartItems.set(items))
    );
  }

  addToCart(product: Product) {
    return this.http.get<CartItem>(`${this.apiUrl}/${product.id}`).pipe(
      switchMap((existingItem) => {
        return this.updateQuantity(existingItem.id.toString(), existingItem.quantity + 1);
      }),
      catchError((error) => {
        if (error.status === 404) {
          const newItem: CartItem = { ...product, quantity: 1, size: 'Large', color: 'Black' }; // Defaults based on mock
          return this.http.post<CartItem>(this.apiUrl, newItem).pipe(
            tap(() => this.getCartItems().subscribe())
          );
        }
        return of(null);
      })
    );
  }

  updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      return this.removeFromCart(id);
    }
    return this.http.patch<CartItem>(`${this.apiUrl}/${id}`, { quantity }).pipe(
      tap(() => this.getCartItems().subscribe())
    );
  }

  removeFromCart(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.getCartItems().subscribe())
    );
  }
}

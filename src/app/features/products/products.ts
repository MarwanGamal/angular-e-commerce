import { Component, inject, signal } from '@angular/core';
import { ProductApi } from './service/product-api';
import { Product } from '../../shared/models/product.model';
import { ProductCard } from '../../shared/components/product/product';
import { ProductsFilter } from './components/products-filter/products-filter';

@Component({
  selector: 'app-products',
  imports: [ProductCard, ProductsFilter],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductApi]
})
export class Products {
  productApi = inject(ProductApi)
  products = signal<Product[]>([])

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(category?: string) {
    this.productApi.getProducts(category).subscribe((data) => {
      this.products.set(data);
    });
  }

  onFilterChange(category: string) {
    this.loadProducts(category);
  }
}


import { Component, inject, signal } from '@angular/core';
import { TopSellersApi } from '../../service/top-sellers-api';
import { Product } from '../../../../shared/models/product.model';
import { ProductCard } from '../../../../shared/components/product/product';

@Component({
  selector: 'app-top-sellers-section',
  imports: [ProductCard],
  templateUrl: './top-sellers-section.html',
  styleUrl: './top-sellers-section.css',
  providers: [TopSellersApi]
})
export class TopSellersSection {
  topSellersApi = inject(TopSellersApi)
  topSellers = signal<Product[]>([])

  ngOnInit() {
    this.topSellersApi.getTopSellers().subscribe((data) => {
      console.log(data);
      this.topSellers.set(data)
    });
  }
}

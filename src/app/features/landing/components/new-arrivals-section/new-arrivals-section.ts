import { Component, inject, signal } from '@angular/core';
import { NewArrivalApi } from '../../service/new-arrival-api';
import { Product } from '../../../../shared/models/product.model';
import { ProductCard } from '../../../../shared/components/product/product';

@Component({
  selector: 'app-new-arrivals-section',
  imports: [ProductCard],
  templateUrl: './new-arrivals-section.html',
  styleUrl: './new-arrivals-section.css',
  providers: [NewArrivalApi]
})
export class NewArrivalsSection {
  newArrivalApi = inject(NewArrivalApi)
  newArrivals = signal<Product[]>([])

  ngOnInit() {
    this.newArrivalApi.getNewArrivals().subscribe((data) => {
      this.newArrivals.set(data);
    });
  }
}

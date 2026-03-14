import { Component, output } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  imports: [],
  templateUrl: './products-filter.html',
  styleUrl: './products-filter.css'
})
export class ProductsFilter {
  categoryChange = output<string>();

  categories = ['All Categories', 'T-shirts', 'Shirts', 'Jeans', 'Shorts'];
  selectedCategory = 'All Categories';

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.categoryChange.emit(category === 'All Categories' ? '' : category);
  }
}

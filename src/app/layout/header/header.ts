import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLinks = signal(
    [
      { label: 'Shop', path: '/shop' },
      { label: 'Top Selling', path: '/top-selling' },
      { label: 'New Arrivals', path: '/new-arrivals' },
      { label: 'Brands', path: '/brands' },
    ]
  )
}

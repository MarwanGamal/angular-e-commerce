import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLinks = signal(
    [
      { label: 'Shop', path: '/products' },
      { label: 'Top Selling', path: '/', fragment: 'top-selling' },
      { label: 'New Arrivals', path: '/', fragment: 'new-arrivals' },
      { label: 'Brands', path: '/' },
    ]
  )
}

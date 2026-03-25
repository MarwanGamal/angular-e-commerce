import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { Products } from './features/products/products';
import { Cart } from './features/cart/cart';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Landing
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'cart',
        component: Cart
    }
];

import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { Products } from './features/products/products';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Landing
    },
    {
        path: 'products',
        component: Products
    }
];

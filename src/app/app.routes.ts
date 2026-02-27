import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { CatazonProducts } from './catazon-products/catazon-products';
import { Orders } from './orders/orders';
import { Details } from './catazon-products/details/details';

export const routes: Routes = [
    {path: "", component: Home}, 
    {path: "about", component: About},
    {path: "catazonproducts", component: CatazonProducts},
    {path: "orders", component: Orders},
    {path: "details/:id", component: Details}
];

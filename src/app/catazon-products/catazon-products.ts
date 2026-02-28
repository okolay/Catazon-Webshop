import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IProduct } from '../iproduct.interface';
import { PRODUCTS } from '../products';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-catazon-products',
  imports: [RouterModule, RouterLink],
  templateUrl: './catazon-products.html',
  styleUrl: './catazon-products.css',
})
export class CatazonProducts {
  catazonProductList: IProduct[] = PRODUCTS
  constructor(private ordersService: CartService){}

  addToOrders(product: IProduct): void{
    this.ordersService.addToOrders(product)
    alert("The product is added to the orders!")
    console.log(this.ordersService.displayOrders());
    
  }

}

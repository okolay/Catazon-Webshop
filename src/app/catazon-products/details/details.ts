import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../iproduct.interface';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../products';
import { CartService } from '../../cart-service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private ordersService: CartService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = PRODUCTS.find((oneProduct) => oneProduct.id === productId)
    // console.log(this.product);
    
  }

  addToOrders(product: IProduct): void{
    this.ordersService.addToOrders(product)
    alert("The product is added to the orders!")
    console.log(this.ordersService.displayOrders());
    
  }

}

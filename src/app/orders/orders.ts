import { Component } from '@angular/core';
import { IProduct } from '../iproduct.interface';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  ordersItems: IProduct[] = []
  constructor(private ordersService: CartService) {
    this.fillOrdersBasket()
    this.showTotal()
  }


  fillOrdersBasket() {
    this.ordersItems = this.ordersService.displayOrders()
  }
total:number = 0

showTotal(){
  this.total = this.ordersService.calculateTotal()
}

}

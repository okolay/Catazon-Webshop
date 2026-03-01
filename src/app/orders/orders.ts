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
  total:number = 0
  discount:number = 0
serviceFee: number = 0
finalPrice: number = 0


  constructor(private ordersService: CartService) {
    // this.fillOrdersBasket()
    // this.showTotal()
    // this.showDiscount()
    this.ordersItems = this.ordersService.displayOrders()
    this.total = this.ordersService.calculateTotal()
    this.discount = this.ordersService.calculateDiscount()
    this.serviceFee = this.ordersService.calculateServiceFee()
    this.finalPrice = this.ordersService.finalPrice()
    this.serviceAndTotal()
  }


//   fillOrdersBasket() {
//     this.ordersItems = this.ordersService.displayOrders()
//   }



// showTotal(){
//   this.total = this.ordersService.calculateTotal()
// }

// discount:number = 0

// showDiscount() {
//   this.discount = this.ordersService.calculateDiscount()

// }
// serviceFee: number = 0
// showService() {
//   this.serviceFee = this.ordersService.calculateServiceFee()
   
// }

servicePlusTotal:number = 0
serviceAndTotal(){
  this.servicePlusTotal = this.ordersService.calculateTotal() + this.ordersService.calculateServiceFee()
}



}


import { Injectable } from '@angular/core';
import { IProduct } from './iproduct.interface';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private ordersBasket: IProduct[] = []

  addToOrders(product: IProduct){
    let productInBasket = this.ordersBasket.find(basketitem => basketitem.id == product.id)
    if (productInBasket) {
      productInBasket.quantity++ 
      
    } else {
      this.ordersBasket.push({...product})
    }
  }

displayOrders() {
  return this.ordersBasket
}

calculateTotal() {
  let total = 0
  for (let product of this.ordersBasket) {
    total += product.price * product.quantity 
  }
  return total
}

}


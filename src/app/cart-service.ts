import { Injectable } from '@angular/core';
import { IProduct } from './iproduct.interface';


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

calculateServiceFee() {
  let serviceFee = (this.calculateTotal()*0.10)
  // let serviceAndTotal = this.serviceFee + this.ordersService.calculateServiceFee()
  return serviceFee
}

totalAndServiceFee() {
  let totalAndService = this.calculateTotal() + this.calculateServiceFee()
  return totalAndService
  
}

calculateDiscount() {
  let discount = 0
  discount = this.totalAndServiceFee() * 0.15
  return discount    
  }

  finalPrice() {
    let final = 0
    final = this.totalAndServiceFee()-this.calculateDiscount()
    return final
  }

}




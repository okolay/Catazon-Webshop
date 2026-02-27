import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../iproduct.interface';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../products';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = PRODUCTS.find((oneProduct) => oneProduct.id === productId)
    // console.log(this.product);
    
  }

}

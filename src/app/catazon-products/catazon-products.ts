import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IProduct } from '../iproduct.interface';
import { PRODUCTS } from '../products';

@Component({
  selector: 'app-catazon-products',
  imports: [RouterModule, RouterLink],
  templateUrl: './catazon-products.html',
  styleUrl: './catazon-products.css',
})
export class CatazonProducts {
  catazonProductList: IProduct[] = PRODUCTS
  

}

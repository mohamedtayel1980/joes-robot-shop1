import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
@Input()   product!:IProduct; 
cart: IProduct[]=[];
addToCart(product:IProduct){
  this.cart.push(product);
  console.log(`product ${product.name} added to cart  `);
 }
 getDiscountedClasses(product:IProduct){
  if(product.discount>0) return ['strikethrough']
  return [];

}
}

import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[]=[];
  constructor() { }

  add(product: IProduct) {
    const isAlreadyInCart = this.cart.some(item => item.id === product.id);
    if (!isAlreadyInCart) {
      this.cart.push(product);
      console.log(`Product "${product.name}" added to cart.`);
    } else {
      console.log(`Product "${product.name}" is already in the cart.`);
    }
  }
}

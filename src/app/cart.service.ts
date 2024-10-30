import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[]=[];
  constructor(private http:HttpClient) { }

  add(product: IProduct) {
    /*const isAlreadyInCart = this.cart.some(item => item.id === product.id);
    if (!isAlreadyInCart) {
      this.cart.push(product);
      console.log(`Product "${product.name}" added to cart.`);
    } else {
      console.log(`Product "${product.name}" is already in the cart.`);
    }*/
   this.cart.push(product);
   this.http.post('/api/cart',this.cart).subscribe(()=>{
    console.log(`Product "${product.name}" added to cart.`);
   })
  }
}

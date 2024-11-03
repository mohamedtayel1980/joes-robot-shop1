import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';

import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products:any;
  filter:string =''
  //private cartSVC:CartService=inject(CartService);
  constructor(private cartSVC:CartService,private ProdcutSVC:ProductService) {
   
  } 
   ngOnInit(){
    this.ProdcutSVC.getProducts().subscribe(products=>{
      this.products=products;

    });
   }

  /*addToCart(product:IProduct){
    this.cart.push(product);
    console.log(`product ${product.name} added to cart  `);
   }*/
    addToCart(product: IProduct) {
      this.cartSVC.add(product);
    }
  getFilterdProducts(){
    return this.filter===''
    ?this.products
    :this.products.filter((product: IProduct)=>product.category===this.filter);
  }
  
}

import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';

import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products:any;
  filter:string =''
  //private cartSVC:CartService=inject(CartService);
  constructor(
    private cartSVC:CartService,
    private ProdcutSVC:ProductService,
  private router:Router,
  private route:ActivatedRoute
) {
   
  } 
   ngOnInit(){
    this.ProdcutSVC.getProducts().subscribe(products=>{
      this.products=products;
     this.route.queryParams.subscribe((params)=>{
      this.filter=params['filter'] ?? '';
    })

    });
   }

  /*addToCart(product:IProduct){
    this.cart.push(product);
    console.log(`product ${product.name} added to cart  `);
   }*/
    addToCart(product: IProduct) {
      this.cartSVC.add(product);
      this.router.navigate(['/cart']);
    }
  getFilterdProducts(){
    return this.filter===''
    ?this.products
    :this.products.filter((product: IProduct)=>product.category===this.filter);
  }
  
}

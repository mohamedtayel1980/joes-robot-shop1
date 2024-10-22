import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
@Input()   product!:IProduct; 
@Output() buy=new EventEmitter(); 

 getDiscountedClasses(product:IProduct){
  if(product.discount>0) return ['strikethrough']
  return [];

}
  buyBottonClicked(product:IProduct){
    this.buy.emit();
  }
}

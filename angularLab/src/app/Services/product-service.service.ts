import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  products:IProduct[] = [{ ID:1, Name:"Turkish Coffee", Quantity: 3, Price: 90, Img: "../assets/mehmet-efendi.jpg" },
  { ID:2, Name:"Different Coffee", Quantity: 1, Price: 50, Img: "../assets/mehmet-efendi.jpg" },
  { ID:3, Name:"More Coffee", Quantity: 5, Price: 20, Img: "../assets/mehmet-efendi.jpg" }];
  getAllProducts(){
    return this.products;
  }
  GetProductById(prdId:number){
    for(let p of this.products){
      if(prdId == p.ID) return p;
    }
    return null;
  }
}

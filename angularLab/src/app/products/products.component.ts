import { Component, OnInit } from '@angular/core';
import { DiscountOffers, IProduct} from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:IProduct[];
  categoryList:ICategory[];
  clientName:string;
  isPurchased:boolean;
  imgStyle = {
    width:"100px"
  }
  constructor() { 
    this.Discount = DiscountOffers.B;
    this.storeName = "Candy Shop";
    this.storeLogo = '../assets/800px_COLOURBOX24249284.jpg';
    this.productList = [];
    this.categoryList = [];
    this.clientName = "Snoop Dog";
    this.isPurchased = false;
  }

  ngOnInit(): void {
  }

}
/*
(1)	Property “Discount” of type DiscountOffers Enum.
(2)	Property “Store name” of type string.
(3)	Property “Store Logo” of type string.
(4)	Property “ProductList” which is an array of IProduct.
(5)	Property “CategoryList” which an array of type ICategory.
(6)	Property “ClientName” of type String.
(7)	Property “IsPurshased” of type Boolean
*/
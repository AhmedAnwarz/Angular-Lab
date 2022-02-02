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
  displayDiscount:boolean = true;
  constructor() { 
    this.Discount = DiscountOffers.C;
    this.storeName = "Coffee Shop";
    this.storeLogo = '../assets/800px_COLOURBOX24249284.jpg';
    this.productList = new Array<IProduct>({ ID:1, Name:"Turkish Coffee", Quantity: 3, Price: 90, Img: "../assets/mehmet-efendi.jpg" },
    { ID:2, Name:"Different Coffee", Quantity: 1, Price: 50, Img: "../assets/mehmet-efendi.jpg" }, { ID:3, Name:"More Coffee", Quantity: 5, Price: 20, Img: "../assets/mehmet-efendi.jpg" })
    this.categoryList = new Array<ICategory>({ID:1, Name:"Food"}, {ID:2, Name:"Books"}, {ID:3, Name:"Fashion"});
    this.clientName = "Client";
    this.isPurchased = false;
    if(this.Discount.toString() != "No Discount"){
      this.displayDiscount = true;
    }
    else  this.displayDiscount = false;
  }
  showMessage(): void{
    this.isPurchased = !this.isPurchased;
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
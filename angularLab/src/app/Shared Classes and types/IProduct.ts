interface IProduct {
    ID:number;
    Name:string;
    Quantity:number;
    Price:number;
    Img:string;
}
/*
i)	ID – of type number.
ii)	Name – of type string
iii)	Quantity – Of type number.
iv)	Price – of type number.
v)	Img – of type string
*/
enum DiscountOffers {
    A = "No Discount",
    B = 100,
    C = 150
}
export {
    IProduct,
    DiscountOffers
}
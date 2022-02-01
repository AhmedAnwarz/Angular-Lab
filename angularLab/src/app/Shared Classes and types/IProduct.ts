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
const enum DiscountOffers {
    A = "No Discount",
    B = "10%",
    C = "15%"
}

export {
    IProduct,
    DiscountOffers
}
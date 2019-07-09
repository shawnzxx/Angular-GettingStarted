export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

//we will create business object class
//if we need class to provide some functionality
export class Product implements IProduct{
    constructor(
        public productId: number,  
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string){
        }
    calculateDiscount(percent:number):number{
        return this.price - (this.price * percent / 100);
    }

}
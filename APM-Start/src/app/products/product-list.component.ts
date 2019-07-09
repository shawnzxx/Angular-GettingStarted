import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    //we can use this directive in any other component
    selector: 'pm-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

//implement the lifecycle hook interface this step not required
//highly recommended so that you can write code for the hook method
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    private _listFilter : string;
    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(v : string) {
        this._listFilter = v;
        this.filteredProducts = this.listFilter ? 
                                this.performFilter(this.listFilter) : 
                                this.products;
    }

    //constructor will be executed when this components first time been inited
    //primarily use for initialization and not for some code to execute
    constructor(private productService: ProductService){
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        });
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    onRatingClicked(message : string) : void{
        this.pageTitle = 'Product List: ' + message;
    }
}
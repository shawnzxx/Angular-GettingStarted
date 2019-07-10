import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-detail',  //no need seletor because we use this components as routing page instead of nesting
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string = "";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService) { 
  }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('id');
    if(param){
      //convert from string to number
      const id = +param;
      this.productService.getProductById(id).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => this.errorMessage = <any>error
      );
    }
  }

  OnBack(): void{
    this.router.navigate(['/products']);
  }

}

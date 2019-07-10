import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService{
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient){

  }

  //return Observable IProduct array
  getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductById(id: number) : Observable<IProduct | undefined> {
    //here we re-use the getProducts function, since we don't have seprate api to call
    return this.getProducts().pipe(
      map((products : IProduct[]) => products.find(p => p.productId === id)),
      catchError(this.handleError)
    );
  }
  
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { IProduct } from '../model/product';
import { Observable, catchError, delay, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({ fromObject: { limit: 5 } }),
      })
      .pipe(
        delay(500),
        retry(3),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  getById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(tap((product) => this.products.push(product)));
  }

  private errorHandler(error: any) {
    this.errorService.handle(error.message);
    return throwError(() => error);
  }
}

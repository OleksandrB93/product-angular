import { Component, OnInit } from '@angular/core';
// import { product as data } from './conponents/product/data/products';
import { Observable, tap } from 'rxjs';
import { IProduct } from './model/product';
import { ProductServiceService } from './services/product.service.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'root-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'angular';
  // loading = false;
  // products$: Observable<IProduct[]>;
  // term = '';

  // constructor(
  //   public productsService: ProductServiceService,
  //   public modalService: ModalService
  // ) {}

  // ngOnInit(): void {
  //   this.loading = true;
  //   //   this.products$ = this.productsService
  //   //     .getAll()
  //   //     .pipe(tap(() => (this.loading = false)));
  //   this.productsService.getAll().subscribe(() => {
  //     this.loading = false;
  //   });
  // }
}

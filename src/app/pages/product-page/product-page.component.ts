import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductServiceService } from 'src/app/services/product.service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'angular';
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(
    public productsService: ProductServiceService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    //   this.products$ = this.productsService
    //     .getAll()
    //     .pipe(tap(() => (this.loading = false)));
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}

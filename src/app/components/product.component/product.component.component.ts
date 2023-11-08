import { Component, Injectable, Input } from '@angular/core';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.component.html',
  styleUrls: ['./product.component.component.scss'],
})
export class ProductComponentComponent {
  @Input() product: IProduct;
  details = false;


}

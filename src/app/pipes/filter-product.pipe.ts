import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    if(!search) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}

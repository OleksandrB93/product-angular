import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductServiceService } from 'src/app/services/product.service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 10,
      },
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}

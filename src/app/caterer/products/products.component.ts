import {Component, inject, Input} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ApiService} from '../../shared/api.service';
import {ImagekitioAngularModule} from 'imagekitio-angular';
import {imgAuthenticator} from '../../img/img-authenticator';

@Component({
  selector: 'app-products',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    ImagekitioAngularModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  protected productForm;
  protected authenticator = imgAuthenticator
  protected fileUploadedState: "none" | "loading" | "error" | "done" = "none";
  private api = inject(ApiService);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.nonNullable.group({
      name: ['', {validators: [], updateOn: 'change'}],
      description: ['', {validators: [], updateOn: 'change'}],
      price: [0, {validators: [], updateOn: 'change'}],
      imgPath: ['', {validators: [], updateOn: 'change'}]
    });
  }

  @Input() refreshProducts: () => void = () => {
  };

  onSubmit() {
    if (this.productForm.valid) {
      const formValue = this.productForm.getRawValue();
      this.api.product.addProduct({
        name: formValue.name,
        price: formValue.price,
        description: formValue.description,
        imgPath: formValue.imgPath
      }).then(() => {
        this.refreshProducts();
      });
    }
  }

  onUploadStartFunction(res: any) {
    console.log('onUploadStart');
    this.fileUploadedState = "loading";
  }

  handleUploadError($event: any) {
    console.error($event);
    this.fileUploadedState = "error";
  }

  handleUploadSuccess($event: any) {
    console.log($event);
    this.fileUploadedState = "done";
    this.productForm.get('imgPath')?.setValue($event.filePath);
  }
}

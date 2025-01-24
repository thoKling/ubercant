import {Component, inject, Input} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-products',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  protected productForm;
  private api = inject(ApiService);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.nonNullable.group({
      name: ['', {validators: [], updateOn: 'change'}],
      description: ['', {validators: [], updateOn: 'change'}],
      price: [0, {validators: [], updateOn: 'change'}],
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
        description: formValue.description
      }).then(() => {
        this.refreshProducts();
      });
    }
  }
}

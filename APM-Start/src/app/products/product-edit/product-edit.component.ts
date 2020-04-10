import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { MessageService } from '../../messages/message.service';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Employee Edit';
  errorMessage: string;

  product: Product;

  constructor(private productService: ProductService,
              private messageService: MessageService,
              private route : ActivatedRoute,
              private router : Router) { }
              ngOnInit():void {
                this.route.paramMap.subscribe(
                  params => {
                    const id = +params.get('id');
                    this.getEmployee(id);
                  }
                  );
              }

  getEmployee(id: number): void {
    this.productService.getProduct(id).subscribe(
     (product : Product) => this.onEmployeeRetrieved(product),
      (error : any) => this.errorMessage =<any>error
    );
  }

  onEmployeeRetrieved(product: Product): void {
    this.product = product;

    if (!this.product) {
      this.pageTitle = 'No employee found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Employee';
      } else {
        this.pageTitle = `Edit employee: ${this.product.name}`;
      }
    }
  }

  deleteEmployee(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.name} was deleted`);
    } else {
      if (confirm(`Really delete employee: ${this.product.name}?`)) {
        this.productService.deleteProduct(this.product.id).subscribe({
          next: () => this.onSaveComplete(`${this.product.name} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  saveEmployee(from:NgForm): void {
      if (true === true) {
      if (this.product.id === 0) {
        this.productService.createProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The new ${this.product.name} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.productService.updateProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.product.name} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }

    // Navigate back to the employee list
    this.router.navigate(['/products']);
  }
}

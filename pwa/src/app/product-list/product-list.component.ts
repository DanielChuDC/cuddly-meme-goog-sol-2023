import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  buyProduct(product: Product) {
    alert(`You have bought ${product.name} for ${product.price}.`);
  }

  viewProduct(product: Product) {
    alert(`You are viewing ${product.name}.`);
  }
}

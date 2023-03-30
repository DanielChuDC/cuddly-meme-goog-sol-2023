import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 9.99,
      image: 'https://picsum.photos/300/200?random=1'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 19.99,
      image: 'https://picsum.photos/300/200?random=2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 29.99,
      image: 'https://picsum.photos/300/200?random=3'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 39.99,
      image: 'https://picsum.photos/300/200?random=4'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 49.99,
      image: 'https://picsum.photos/300/200?random=5'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

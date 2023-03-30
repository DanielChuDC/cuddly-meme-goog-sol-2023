import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
   product: Product | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);
    this.product = this.productService.getProductById(id);
  }

  onChooseService() {
    // Navigate to the UserreqReceiptComponent
    this.router.navigate(['/userreq-receipt']);
  }
}

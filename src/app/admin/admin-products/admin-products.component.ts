import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products$ = this.productService.getAll();
  }

  editProduct(product) {
    this.router.navigate(['/admin/product/'+ product.key]);
  }
  ngOnInit() {
  }



}

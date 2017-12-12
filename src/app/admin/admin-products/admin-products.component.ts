import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  products: any[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;
      this.filteredProducts = [].concat(products);
    });
  }

  editProduct(product) {
    this.router.navigate(['/admin/product/' + product.key]);
  }

  filter(value) {
    if (!this.products && !value) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter(p => {
      const title: string = p.payload.val().title;
      return title.toUpperCase().includes(value.toUpperCase());
    })

    console.log(this.filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}

import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$;
  categories$;

  constructor(private productService: ProductService, private categoryService: CategoryService) { 
  }

  ngOnInit() {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
  }

}

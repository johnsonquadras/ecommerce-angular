import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();

    console.log();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id) {
      this.productService.get(id).take(1).subscribe(product => this.product = product);
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure you want to delete')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    } else {
      //Nothing happens
    }
  }
}

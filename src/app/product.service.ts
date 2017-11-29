import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    product.key = new Date().getTime();
    console.log(product);
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges();
  }

  get(productId) {
    return this.db.object('/products/'+ productId).valueChanges();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //json-server --watch db.json
api = 'http://localhost:3000/products'
  constructor(private http : HttpClient) { }

  getPoducts(){
    return this.http.get<Product []>(this.api)
  }
  addPoduct (product , Product){
    return this.http.post(this.api , product)
  }
  getProductById(id : number){
    return this.http.get(this.api+'/'+id)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titre: string;
  productList: Product[]
  nombreMax: number
  image: string = '../assets/1.jpg'
  nb: number = 0;
  product: Product;
  hidden: boolean;
  constructor(private calculService: CalculService, 
    private productService: ProductService, 
      private router: Router,) { }

  ngOnInit(): void {
    this.titre = 'E-commerce'
    this.hidden = true
    this.product = new Product()

    // this.productList = [
    //   { id: 1, title: 'Product1', price: 20, quantity: 20, like: 0 },
    //   { id: 2, title: 'Product2', price: 15, quantity: 0, like: 0 },
    //   { id: 3, title: 'Product3', price: 17, quantity: 10, like: 0 },
    // ]
    this.productService.getPoducts().subscribe((data: Product[]) => (this.productList = data).forEach(p => { console.log(p) }))

  }
  showForm() {
    this.hidden = false;
  }
  hideForm() {
    this.hidden = true;
  }


  IncrementLike(i: number) {

    this.productList[i].like++
  }

  IncrementLikeOutput(product) {
    let i = this.productList.indexOf(product)
    this.productList[i].like++
  }
  buyProduct(product) {
    product.quantity--
  }
  buyProductOutPut(product) {
    product.quantity--
  }
  
  calcul() {
    this.nb = 0
    this.productList.forEach(produit => {
      if (produit.quantity == 0) {
        this.nb++;
      }
    }
    );
  }
  getStat() {
    this.nb = this.calculService.calcul(this.productList, 'quantity', 0)
  }





  addProduct(product: Product) {
    this.product.image="../assets/tshirt.jpg"
    this.product.like = 0;
    this.productService.addPoduct(product).subscribe(
      () => (this.productList.push(product))
    )
    this.hidden = true
   
  }
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        let i = this.productList.indexOf(product);
        this.productList.splice(i, 1)
      }
    )
  }
  deleteProductId(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.productList.forEach(produit => {
          if (produit.id == id) {
            let product = produit
            let i = this.productList.indexOf(product)
            this.productList.splice(i, 1)
          }
        })
      }
    )
  }

}

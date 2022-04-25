import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  ProductList: Product[]
  titre: string;
  hidden: boolean;
  n: number
  product: Product
  image: string = '../assets/1.jpg'
  nbMax: number;
  constructor(private calculservice: CalculService,
    private productservice: ProductService) { }
  listUsers: any[]


  ngOnInit(): void {
    this.titre = 'E-commerce'
    this.hidden = true
    this.product = new Product()

    this.productservice.getPoducts().subscribe(
      (data: Product[]) => { this.ProductList = data }
    )
    // this.ProductList =[
    //   {id : 1 , title : 'Produit1' , price : 20 , like : 0 , quantity : 15 },
    //   {id : 2 , title : 'Produit2' , price : 40 , like : 0 , quantity : 25 },
    //   {id : 3 , title : 'Produit3' , price : 5 , like : 0 , quantity : 0 },

    // ]
  }

  likeProduct(product) {
    product.like++
  }
  buyProduct(i: number) {
    this.ProductList[i].quantity--
  }

  calcul() {
    this.n = this.calculservice.calcul(this.ProductList, 'quantity', 0);
    // this.n = 0;
    // this.ProductList.forEach(produit => {
    //   if (produit.quantity == 0) {
    //    this.n++
    //   }
    // }
    // );
  }
  showForm() {
    this.hidden = false;
  }
  hideForm() {
    this.hidden = true;
  }
  addProduct(product: Product) {
    this.product.like = 0;
    this.productservice.addPoduct(product).subscribe()
   
  }
  deleteProduct(product: Product){}
}

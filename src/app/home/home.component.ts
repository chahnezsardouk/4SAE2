import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[]
})
export class HomeComponent implements OnInit {
ProductList : Product[]
n : number
image: string ='../assets/1.jpg'
nbMax : number;
  constructor(private calculservice : CalculService) { }
  listUsers : any []

  ngOnInit(): void {

    this.ProductList =[
      {id : 1 , title : 'Produit1' , price : 20 , like : 0 , quantity : 15 },
      {id : 2 , title : 'Produit2' , price : 40 , like : 0 , quantity : 25 },
      {id : 3 , title : 'Produit3' , price : 5 , like : 0 , quantity : 0 },
      
    ]
  }

  likeProduct(product){
   product.like ++
  }
  buyProduct(i : number){
    this.ProductList[i].quantity -- 
  }

  calcul() {
    this.n = this.calculservice.calcul(this.ProductList , 'quantity' , 0);
    // this.n = 0;
    // this.ProductList.forEach(produit => {
    //   if (produit.quantity == 0) {
    //    this.n++
    //   }
    // }
    // );
  }

}

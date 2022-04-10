import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ProductList : Product[]
nbMax : number;
  constructor() { }
  listUsers : any []

  ngOnInit(): void {
    this.listUsers = [  {
      userId: 11,
      active: true,
      address: null,
      birthday: "2022-03-27",
      city: "string 2074",
      tel: null,
      email: "string@esprit.tn",
      firstName: "string",
      gender: "MALE",
      lastName: "string",
      password: "$2a$10$0plXGlrn3zXvZvmugJNOa.TLBVSN7iKRmwwTbffTRGisLixY3Z20q",
      phoneNumber: 0,
      picturePath: null,
      username: "esprit123",
      verificationCode: 0
    },]
    console.log(this.listUsers)
    // this._service.getUsersName().subscribe(
    //   res => {
    //     console.log(res);
    //     this.listUsers = res;
    //   }
    // );
  
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

}

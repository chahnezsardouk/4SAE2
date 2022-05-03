import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-electro',
  templateUrl: './electro.component.html',
  styleUrls: ['./electro.component.css']
})
export class ElectroComponent implements OnInit {
  electroList : Product[]
  constructor() { }

  image: string = '../assets/electro.jpg'
  ngOnInit(): void {
    this.electroList = [
      { id: 1, title: 'electro1', image : this.image, price: 30, quantity: 10, like: 0 },
      { id: 2, title: 'electro2', image : this.image, price: 15, quantity: 0, like: 0 },
      { id: 3, title: 'electro3', image : this.image, price: 17, quantity: 10, like: 0 },
    ]
  }

}

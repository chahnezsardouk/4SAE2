import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : Product
  @Input() nombreMax : number
  @Output() notificationLike = new EventEmitter<Product>();
  @Output() notificationDelete = new EventEmitter<Product>();
  @Output() notificationBuy = new EventEmitter<Product>();
    constructor() { }
  
    image: string = '../assets/1.jpg'
    ngOnInit(): void {
    }
    sendNotifLike(){
      this.notificationLike.emit(this.product);
      
    }
    sendNotifDelete(){
      this.notificationDelete.emit(this.product);
      
    }
    sendNotifBuy(){
      this.notificationBuy.emit(this.product);
      
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiurl : string ='https://jsonplaceholder.typicode.com/todos'
  constructor(private http : HttpClient) { }
  
  getToDo()
  {
    return this.http.get<Todo[]>(this.apiurl)
  }
 
}

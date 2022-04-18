import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList : Todo[]
  constructor(private todoService : TodoService) { }
  nb : number;
  ngOnInit(): void {
    // this.todoList = [{ id : 1 , title : 'todo1' , completed : true},
    // { id : 2 , title : "todo2" , completed : false},
    // { id : 3 , title : 'todo3' , completed : true},
    // { id : 4 , title : 'todo4' , completed : false}]

this.todoService.getToDo().subscribe((data: Todo[]) => this.todoList = data)
  }

  calcul(){
   // let n = 0
   this.nb = 0
    for(let i in this.todoList )
    {
      if(this.todoList[i].completed == true)
      this.nb ++
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoDataService } from "../../services/todo-data.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any;
  todo = {
    completed: false,
    title: ''
  };
  addSuccess:boolean = false;
  addError:boolean = false;

  constructor(
    public todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => {
      console.log(todos);
      this.todos = todos;
    }, error =>{
      console.log(error);
    } )
  }

  addTodo(form){
    this.todoService.addTodo(this.todo).subscribe( todo =>{
      console.log(form);
      this.todos.unshift(todo);
      form.resetForm();
      this.addSuccess = true;
      setTimeout( () => {
        this.addSuccess = false;
      }, 2000);
    }, error =>{
      console.log(error);
      this.addError = true;

      setTimeout( () => {
        this.addError = false;
      }, 2000);
    })
  }

  editTodo(todo){
    this.todoService.editTodo(todo).subscribe(todo => {
      console.log(todo);
    }, error => {
      console.log(error)
    })
  }

}

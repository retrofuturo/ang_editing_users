import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http"; // чтобы получать хедерсы
import { HttpParams } from "@angular/common/http"; // чтобы устанавливать конкретные параметры в запросе
import 'rxjs/add/operator/retry'; // библиотека, отсюда оператор retry

@Injectable()
export class TodoDataService {

  constructor(
    public http: HttpClient
  ) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .retry(3)
    // retry - говорим сколько раз ещё нужно стучаться на сервер в случае, если нет ответа
  }

  addTodo(todo){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo,{
      headers: new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8'),
      params: new HttpParams().set('id', '32')
    })
  }

  editTodo(todo){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/1', todo)
  }

}

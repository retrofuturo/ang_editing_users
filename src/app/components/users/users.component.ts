
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  posts:any;
  post = {
    userId: 1,
    title: '',
    body: '',
    editing: false
  };

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( posts =>{
      this.posts = posts;
      // this.posts = this.posts.map( post => {
      //   post.editing = false
      // });

    }, error => {
      console.log(error)
    })
  }

  addPost(form){
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.post).subscribe( post => {
      console.log(this.post);
      this.posts.unshift(post);
      form.resetForm();
    }, error =>{
      console.log(error);
    })
  }

  editPost(i, post){
    this.http.put('https://jsonplaceholder.typicode.com/todos/1', post).subscribe( post =>{
      console.log(post)
    }, error =>{
      console.log(error);
    })
  }

}

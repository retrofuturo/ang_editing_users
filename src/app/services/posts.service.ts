import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsService {

  constructor(public http: HttpClient) {
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  addPost(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  editPost(i, post) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${i}`, post)
  }

  removePost(i){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${i}`)
  }

}

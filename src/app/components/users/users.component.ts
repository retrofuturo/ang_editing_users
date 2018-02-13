
import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";


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
    body: ''
  };
  addSuccess:boolean = false;
  addError:boolean = false;
  editSuccess:boolean = false;
  editError:boolean = false;
  removeSuccess:boolean = false;
  removeError:boolean = false;


  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postsService.getPosts().subscribe( posts =>{
      this.posts = posts;

    }, error => {
      console.log(error)
    })
  }

  addPost(form){
    this.postsService.addPost(this.post).subscribe( post => {
      console.log(this.post);
      this.posts.unshift(post);
      form.resetForm();
      this.addSuccess = true;
      setTimeout( () => {
        this.addSuccess = false;
      }, 3000);
    }, error =>{
      console.log(error);
      this.addError = true;
    })
  }

  editPost(i, post){
    delete post.editing;
    this.postsService.editPost(i+1, post).subscribe( post =>{
      console.log(post);
      this.editSuccess = true;
      setTimeout( () => {
        this.editSuccess = false;
      }, 3000);
    }, error =>{
      this.editError = true;
      console.log(error);
    })
  }

  removePost(i){
    this.posts.splice(i, 1);
    console.log(this.posts);
    this.postsService.removePost(i+1).subscribe( response =>{
      console.log(response);
      this.removeSuccess = true;
      setTimeout( () => {
        this.removeSuccess = false;
      }, 3000);
    }, error =>{
      console.log(error);
      this.removeSuccess = true;
    })
  }

}

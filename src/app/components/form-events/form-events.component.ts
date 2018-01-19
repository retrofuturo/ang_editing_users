import { Component } from '@angular/core';

interface User{
  name:string,
  email:string,
  editing:boolean
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent {

  // text:string;

  user:User = {
    name: '',
    email: '',
    editing: false
  };
  users:User[] = [
    {
      name: 'Polina',
      email: 'test@test.com',
      editing: false

    },
    {
      name: 'Vasya',
      email: 'test@test.com',
      editing: false
    }
  ];

  constructor() { }

  // formEvent(e){
  //   console.log(e);
  //   this.text = e.target.value;
  // }

  onSubmit(form){
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editing: false
    });
    console.log(this.user);
    form.resetForm();
  }

  removeUser(i){
    this.users.splice(i, 1);
  }

  edit(i){
    this.users[i].editing = !this.users[i].editing;
  }
}

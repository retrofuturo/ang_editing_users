import { Component } from "@angular/core";

import { User } from '../User';
@Component({
  selector: 'sandbox',
  template: `
    <h1>{{ name }} is {{ age }} years old</h1>
  `
})

export class SandboxComponent{
  name:string = 'Polina';
  age:number = 23;
  hasChildren:boolean = false;
  city: any = 'NY';
  numberArray: number[] = [1, 2, 3];
  stringArray: string[] = ['one', 'two'];
  anyArray: any[] = ['one', 'two', 3];
  myTuple: [string, number] = ['one', 1];
  unusable: void = undefined; // undefined, null

  user:User;
  users:User[];

  constructor(){
    this.user = {
      id: 1,
      name: 'Vasya',
      email: 'vasya@mail.ru'
    };

    this.users = [
      {
        id: 1,
        name: 'Vasya',
        email: 'vasya@mail.ru'
      },
      {
        id: 1,
        name: 'Vasya',
        email: 'vasya@mail.ru'
      }
    ]

  }
}



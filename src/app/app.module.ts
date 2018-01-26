import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// import components
import { AppComponent } from './app.component';
import { SandboxComponent } from "./components/sandbox/sandbox.component";
import { TestComponent } from './components/test/test.component';
import { EventsComponent } from './components/events/events.component';
import { FormEventsComponent } from './components/form-events/form-events.component';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from "./components/users/users.component";
// import services
import {TodoDataService} from "./services/todo-data.service";



@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    TestComponent,
    EventsComponent,
    FormEventsComponent,
    TodoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

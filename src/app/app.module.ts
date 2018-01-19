import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SandboxComponent } from "./components/sandbox/sandbox.component";
import { TestComponent } from './components/test/test.component';
import { EventsComponent } from './components/events/events.component';
import { FormEventsComponent } from './components/form-events/form-events.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    TestComponent,
    EventsComponent,
    FormEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

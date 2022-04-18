import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http'

// const ROUTES : Routes = [
// {path : 'home' , component: HomeComponent},
// {path : 'todo' , component: TodoComponent},
// {path: '**' , component: NotFoundComponent},
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    NotFoundComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

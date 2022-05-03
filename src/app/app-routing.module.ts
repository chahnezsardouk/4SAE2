import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { ElectroComponent } from './electro/electro.component';


const ROUTES : Routes = [
  {path : 'home' , component: HomeComponent},
  {path : 'todo' , component: TodoComponent},
  {path : 'eletro' , component: ElectroComponent},
  {path : 'home/:id' , component: DetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**' , component: NotFoundComponent},
  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ], exports : [RouterModule]
})
export class AppRoutingModule { }

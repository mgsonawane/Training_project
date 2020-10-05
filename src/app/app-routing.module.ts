import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'login', component: StartComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'books', component: BooksComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'students',component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

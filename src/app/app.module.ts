import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import {ToastrModule} from 'ngx-toastr';
import { TabModule } from 'angular-tabs-component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component'
import { UserService} from './service/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { FruitsComponent } from './fruits/fruits.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component'
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { AngularResizedEventModule } from 'angular-resize-event';
import { StudentsComponent } from './students/students.component';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeComponent,
    SignupComponent,
    DemoComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    BooksComponent,
    FruitsComponent,
    ProfileComponent,
    StudentsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    Ng2SmartTableModule,
    MatSelectModule,
    AppRoutingModule,
    AngularResizedEventModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 20000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BookingComponent } from './booking/booking.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes:Routes = [
  {path:'home', component:HomeComponent},
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path:'home/booking', component:BookingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [{provide:APP_BASE_HREF,useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

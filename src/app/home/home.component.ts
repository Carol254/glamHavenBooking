import { Component } from '@angular/core';
import { FormBuilder,FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  firstName = new FormControl('');
  emailAddress = new FormControl('');

  constructor(  private router:Router){}

  services: Service[] = [
    {value: 's-1', viewValue: 'Manicure'},
    {value: 's-2', viewValue: 'Pedicure'},
    {value: 's-3', viewValue: 'Facial'},
    {value: 's-4', viewValue: 'Hair Styling'},
    {value: 's-3', viewValue: 'Sea C Spa Treatment'}
  ];

  bookAppointment() {
    this.router.navigate(['home/booking']);
  }

}

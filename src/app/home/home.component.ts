import { Component } from '@angular/core';
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
  services: Service[] = [
    {value: 's-1', viewValue: 'Manicure'},
    {value: 's-2', viewValue: 'Pedicure'},
    {value: 's-3', viewValue: 'Facial'},
    {value: 's-4', viewValue: 'Hair Styling'},
    {value: 's-3', viewValue: 'Sea C Spa Treatment'}
  ];


}

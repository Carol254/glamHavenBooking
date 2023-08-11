import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators,FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ClientBookingDataService } from '../client-booking-data.service';
interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  disabledBtn: boolean = false;
  clientForm!: FormGroup;

  services: Service[] = [
    {value: 's-1', viewValue: 'Manicure'},
    {value: 's-2', viewValue: 'Pedicure'},
    {value: 's-3', viewValue: 'Facial'},
    {value: 's-4', viewValue: 'Hair Styling'},
    {value: 's-3', viewValue: 'Sea C Spa Treatment'}
  ];

  constructor(
    private router:Router,
    private clientBookingDataService:ClientBookingDataService){}

  ngOnInit(): void {
    this.clientForm = new FormGroup({
            firstName :new FormControl('',[Validators.required]),
            emailAddress: new FormControl(''),
            service: new FormControl(''),
            appointmentDate: new FormControl(''),
            message: new FormControl('')
    });

  }

 onSubmit() {
    console.log(this.clientForm);
    this.clientBookingDataService.setFormData(this.clientForm);
    this.router.navigate(['home/booking']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientBookingDataService } from '../client-booking-data.service';
import { ClientData } from '../models/client-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  clientForm: FormGroup;

  firstName: string = '';
  emailAddress: string = '';
  service:string = '';
  appointmentDate: string = '';
  message:string = '';


  constructor(private clientBookingDataService:ClientBookingDataService){
    this.clientForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.clientBookingDataService.getFormData().subscribe(formData =>{
      if(formData){
        this.clientForm = formData;

        this.firstName = this.clientForm.get('firstName')?.value; 
        this.emailAddress = this.clientForm.get('emailAddress')?.value;
        this.service = this.clientForm.get('service')?.value;
        this.appointmentDate = this.clientForm.get('appointmentDate')?.value;
        this.message = this.clientForm.get('message')?.value;

      }


    });
  }

}

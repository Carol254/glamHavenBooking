import { Component, OnInit } from '@angular/core';
import { ClientBookingDataService } from '../client-booking-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  formData: any;

  constructor(private clientBookingDataService:ClientBookingDataService){}

  ngOnInit(): void {
    this.clientBookingDataService.getFormData().subscribe(data =>{
      this.formData = data;
    });
  }

}

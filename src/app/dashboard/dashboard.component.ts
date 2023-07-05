import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../shared/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formData: any;

  constructor(private authservice:AuthserviceService) {
    this.formData = this.authservice.loggedInUser;
  }

  ngOnInit(): void {}
}

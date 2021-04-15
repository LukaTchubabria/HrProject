import { Component, OnInit } from '@angular/core';
import { DataService } from  '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Freelancers: any;
  Hr: any;
  
  constructor(private Data:DataService) { 
    this.Freelancers = Data.getFreelancerInfo();
    this.Hr = Data.getHrInfo();

  }

  ngOnInit(): void { }

  foo() {
    var cvladi = 0;
  }
}

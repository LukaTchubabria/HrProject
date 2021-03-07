import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  popup = false;
  authorized = false;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  popUp(){
    this.popup = true;
    this.router.navigate([{outlets: {popUp: 'auth'}}]);
  }
}

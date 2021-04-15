import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  Members: any;
  AboutUs: string = "No Info";
  constructor(private AboutInfo: DataService) { }

  ngOnInit(): void {
    // this.AboutInfo.getAboutInfo().subscribe(Data => {
    //   this.Members = Data.members;
    //   this.AboutUs = Data.aboutUs;
    // });

    var Data = this.AboutInfo.getAboutInfo();
    this.Members = Data.members;
    this.AboutUs = Data.aboutUs;
  }

}

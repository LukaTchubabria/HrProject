import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  Questions: any;
  toggles;
  
  constructor(private Data: DataService) {
    this.Questions = this.Data.getHelpInfo();
    this.toggles = Array(this.Questions.length);

    for (var i = 0; i < this.toggles.length; i++){
      this.toggles[i] = false;
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  fakearray = ["ratom armushaobs es saiti?", "damasaqmebt?", "guga movida?"];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular5templatedriven',
  templateUrl: './angular5templatedriven.component.html',
  styleUrls: ['./angular5templatedriven.component.css']
})
export class Angular5templatedrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  model = {
    firstname: "", 
    lastname: ""
  }
}

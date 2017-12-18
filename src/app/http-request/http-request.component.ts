import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GitData } from '../data';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {
  jobs:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getJobs().subscribe(data => {
      // console.log(data);
      this.jobs=data;
      console.log(this.jobs);
    });
  }
}

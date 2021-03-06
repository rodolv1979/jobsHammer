import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  jobsArray: any[];
  currentIdx: number;
  isLoading: boolean = true;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.jobsArray = [];
    this.http.get('../assets/data/jobs.json')
      .map((data: any) => data)
      .subscribe((data: any) => {
        this.isLoading = false;
        data.body.map(job => this.jobsArray.push(job));
      });
  }
  receiveIdx($event) {
    this.currentIdx = $event;
  }

}




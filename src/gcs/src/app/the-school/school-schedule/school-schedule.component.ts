import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './school-schedule.component.html',
  styleUrls: ['./school-schedule.component.css']
})
export class TheSchoolScheduleComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
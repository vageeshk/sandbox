import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './day-at-school.component.html',
  styleUrls: ['./day-at-school.component.css']
})
export class NurseryDayAtSchoolComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
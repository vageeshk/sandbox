import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './cultural-events.component.html',
  styleUrls: ['./cultural-events.component.css']
})
export class NurseryCulturalEventsComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
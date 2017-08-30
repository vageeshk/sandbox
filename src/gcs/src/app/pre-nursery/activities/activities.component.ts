import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
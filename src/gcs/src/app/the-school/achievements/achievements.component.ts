import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class TheSchoolAchievementsComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
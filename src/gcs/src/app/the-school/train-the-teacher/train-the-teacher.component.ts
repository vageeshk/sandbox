import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './train-the-teacher.component.html',
  styleUrls: ['./train-the-teacher.component.css']
})
export class TheSchoolTrainTheTeacherComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
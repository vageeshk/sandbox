import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class PrimaryAssessmentsComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
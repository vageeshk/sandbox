import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './the-school.component.html',
  styleUrls: ['./the-school.component.css']
})
export class TheSchoolComponent implements OnInit {
 public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
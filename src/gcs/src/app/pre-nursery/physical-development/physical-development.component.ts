import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './physical-development.component.html',
  styleUrls: ['./physical-development.component.css']
})
export class PhysicalDevelopmentComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
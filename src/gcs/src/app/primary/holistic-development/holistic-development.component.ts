import { Component, OnInit } from '@angular/core';

class model{

}

@Component({
  templateUrl: './holistic-development.component.html',
  styleUrls: ['./holistic-development.component.css']
})
export class PrimaryHolisticDevelopmentComponent implements OnInit{
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class NurseryTechnologyComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
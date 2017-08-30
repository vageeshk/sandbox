import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './nursery.component.html',
  styleUrls: ['./nursery.component.css']
})
export class NurseryComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
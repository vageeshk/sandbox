import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class PrimaryCompetitionsComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
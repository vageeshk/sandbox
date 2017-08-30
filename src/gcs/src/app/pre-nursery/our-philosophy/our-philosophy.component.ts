import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './our-philosophy.component.html',
  styleUrls: ['./our-philosophy.component.css']
})
export class OurPhilosophyComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
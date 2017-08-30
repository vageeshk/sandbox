import { Component, OnInit } from '@angular/core';

class model{

}

@Component({
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class PrimaryInfrastructureComponent implements OnInit{
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './pre-nursery.component.html',
  styleUrls: ['./pre-nursery.component.css']
})
export class PreNurseryComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
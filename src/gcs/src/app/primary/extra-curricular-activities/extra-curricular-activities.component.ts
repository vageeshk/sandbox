import { Component, OnInit } from '@angular/core';

class model {

}

@Component({
  templateUrl: './extra-curricular-activities.component.html',
  styleUrls: ['./extra-curricular-activities.component.css']
})
export class PrimaryExtraCurricularComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}
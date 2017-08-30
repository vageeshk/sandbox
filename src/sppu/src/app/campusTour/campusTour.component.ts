import { Component, OnInit } from '@angular/core';

class model{
}

@Component({
	templateUrl: './campusTour.component.html',
	styleUrls: ['./campusTour.component.css']
})

export class CampusTourComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}
import { Component, OnInit } from '@angular/core';

class model{
}

@Component({
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}
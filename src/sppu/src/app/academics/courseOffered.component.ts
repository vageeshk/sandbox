import { Component, OnInit } from '@angular/core';

class model{
}

@Component({
	templateUrl: './courseOffered.component.html',
	styleUrls: ['./courseOffered.component.css']
})

export class CourseOfferedComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}
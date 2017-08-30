import { Component, OnInit } from '@angular/core';

class model{
}

@Component({
	templateUrl: './facultyDetails.component.html',
	styleUrls: ['./facultyDetails.component.css']
})

export class FacultyDetailsComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}
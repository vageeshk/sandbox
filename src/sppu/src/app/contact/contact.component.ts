import { Component, OnInit } from '@angular/core';

class model{
}

@Component({
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class model{
}

@Component({
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
	public m: model;
	public element: any;
	constructor(
		public route: ActivatedRoute
	) { }
	ngOnInit() {
		this.m = new model();
		this.route.fragment.subscribe(f => {
			this.element = f;
		})
	}
	ngAfterViewInit() {
		var division = document.getElementById(this.element);
		setTimeout(() => {
			if (division) division.scrollIntoView();
		}, 200);
	}
}
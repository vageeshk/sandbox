import { Component, OnInit } from '@angular/core';

class model{
	news = [
		{ Title:"Invitation for Rasa Sanje Programme 2016", newsId:'Rasasanje-2016'},
		{ Title:"Observing Rashtriya Ekta Diwas", newsId:'Rashtriya-Ekta-Diwas'},
		{ Title:"Happy Deepavali", newsId:'happyDeepavali'},
		{ Title:"Deepavali holidays & Kannada Rajyotsava Notification", newsId:'rajyotsava'},
		{ Title:"Time table from 19th October 2016 to 22nd October 2016", newsId:'OctTimeTable'}
	];
}

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}
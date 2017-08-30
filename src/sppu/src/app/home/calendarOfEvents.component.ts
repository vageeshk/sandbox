import { Component } from '@angular/core';
import * as _ from 'underscore';

class cell {
	public css_class: string = "cal-default";
	constructor(public value: string, public col_pos: number) { }
}

// class evt {
// 	public css_class: string = "cal-default";
// 	months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// 	days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// 	constructor(public event_name: string, public event_date: any, public event_category: any) { }
// 	get_date() {
// 		let date = new Date(this.event_date);
// 		let mth_indx = date.getMonth();
// 		let dow = date.getDay();
// 		return date.getDate() + " " + this.months[mth_indx] + "(" + this.days[dow] + ")";
// 	}
// }

class model {
	months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	selected_month: string;
	days: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	date_rows: any[] = [];
	days_in_month: any[] = new Array<cell>();
	constructor() { }
	set_dates() {
		this.date_rows = [];
		this.days_in_month = [];
		this.set_row();
		let arr = this.selected_month.split(" ");
		let mth_indx = _.indexOf(this.months, arr[0]);
		let date = new Date(+arr[1], mth_indx, 1);
		let today = new Date();

		while (date.getMonth() === mth_indx) {
			let cl = new cell("" + date.getDate(), date.getDay());
			if (date.getDay() == 0) { cl.css_class = "cal-holiday"; }
			if (date.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) { cl.css_class = "cal-today"; }
			this.days_in_month.push(cl);
			date.setDate(date.getDate() + 1);
		}
		let blank_dates = [
			new cell("", 0),
			new cell("", 1),
			new cell("", 2),
			new cell("", 3),
			new cell("", 4),
			new cell("", 5),
			new cell("", 6),
		]
		let first_date = _.first(this.days_in_month);
		let last_date = _.last(this.days_in_month);
		let prepend_slice_size = first_date.col_pos - 0;
		let append_slice_size = 6 - last_date.col_pos;
		if (prepend_slice_size > 0) {
			this.days_in_month = blank_dates.slice(0, prepend_slice_size).concat(this.days_in_month);
		}
		if (append_slice_size > 0) {
			this.days_in_month = this.days_in_month.concat(blank_dates.slice(0 - append_slice_size));
		}
		let rows = this.chunk(this.days_in_month, 7);
		let rows_copy = this.date_rows;
		_.forEach(rows, function (row, k) {
			rows_copy.push(row);
		})
	}
	set_row() {
		let row = new Array<cell>();
		_.forEach(this.days, function (d, k) {
			let cl = new cell(d, k);
			cl.css_class = "cal-day";
			row.push(cl);
		});
		this.date_rows.push(row);
	}
	set_months(current_date: any) {
		this.selected_month = this.months[current_date.getMonth()] + " " + current_date.getFullYear();
	}

	// events: any;
	// EventsDates: any = [{ "EventDate": "2017-01-26T00:00:00", "EventName": "Republic Day", "EventCategoryAsString": "Event" }, { "EventDate": "2017-08-15T00:00:00", "EventName": "Independance Day", "EventCategoryAsString": "Event" }]
	// set_events() {
	// 	let mdl = this;
	// 	this.events = [];
	// 	_.forEach(this.EventsDates, function (e: any, j) {
	// 		let go_ahead: boolean = e.EventName !== "Sunday";
	// 		if (go_ahead) {
	// 			let date = new Date(e.EventDate);
	// 			let evt_x = new evt(e.EventName, date, e.EventCategoryAsString);
	// 			let dt_x = new Date().setHours(0, 0, 0, 0);
	// 			evt_x.css_class = date.setHours(0, 0, 0, 0) < dt_x ? "cal-holiday" : date.setHours(0, 0, 0, 0) > dt_x ? "cal-future_events" : "cal-event_today";
	// 			mdl.events.push(evt_x);
	// 		}
	// 	});
	// }

	chunk(arr: any, size: number) {
		var newArr = [];
		for (var i = 0; i < arr.length; i += size) {
			newArr.push(arr.slice(i, i + size));
		}
		return newArr;
	}
}

@Component({
	templateUrl: './calendarOfEvents.component.html',
	styleUrls: ['./calendarOfEvents.component.css']
})

export class CalendarOfEventsComponent {
	public m: model;
	public current_date = new Date();
	constructor() {
		this.init_model();
		this.sub_store();
		this.init_store();
	}
	init_model() {
		this.m = new model();
	}
	init_store() {
	}
	sub_store() {
		this.m.set_months(this.current_date);
		this.m.set_dates();
	}
	left() {
		var cd = new Date(this.m.selected_month);
		var dt = new Date(cd.getFullYear(), cd.getMonth(), 1);
		dt.setMonth(dt.getMonth() - 1);
		this.m.set_months(dt);
		this.m.set_dates();
	}
	right() {
		var cd = new Date(this.m.selected_month);
		var dt = new Date(cd.getFullYear(), cd.getMonth(), 1);
		dt.setMonth(dt.getMonth() + 1);
		this.m.set_months(dt);
		this.m.set_dates();
	}
	today() {
		this.sub_store();
	}
}
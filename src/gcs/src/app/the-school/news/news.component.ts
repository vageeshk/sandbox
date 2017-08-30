import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class model {
	News: any = [
		{ 
			Title: 'Talents Search 2017-18 of lower primary.', 
			Description: "Photos of Talents Search 2017-18 of lower primary.",
			ShortDescription: 'Photos of Talents Search of lower primary',
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1502688050/Talent_Search_2_x8tzje.jpg',
			Image: ['assets/img/Talent_Search_1.jpg','assets/img/Talent_Search_2.jpg','assets/img/Talent_Search_3.jpg','assets/img/Talent_Search_4.jpg','assets/img/Talent_Search_5.jpeg','assets/img/Talent_Search_6.jpeg','assets/img/Talent_Search_7.jpeg','assets/img/Talent_Search_8.jpeg','assets/img/Talent_Search_9.jpeg','assets/img/Talent_Search_10.jpeg'],
			Date : '14-Aug-2017'
		},
		{ 
			Title: 'Nursery activities for the month of July', 
			Description: 'Photos of Nursery activities  for the month of July.',
			ShortDescription: "Activity photos of Nursery.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1502272265/act_pho_Nur_9_8_17_3_bkfovm.jpg',
			Image: ['assets/img/act_pho_Nur_9_8_17_1.jpg','assets/img/act_pho_Nur_9_8_17_2.jpg','assets/img/act_pho_Nur_9_8_17_3.jpg','assets/img/act_pho_Nur_9_8_17_4.jpg','assets/img/act_pho_Nur_9_8_17_5.jpg','assets/img/act_pho_Nur_9_8_17_6.jpg'],
			Date : '09-Aug-2017'
		},
		{ 
			Title: 'I Semester II Unit Test Time Table for Higher Primary', 
			Description: 'I Semester II Unit Test Time Table has been announced for Higher Primary.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/1-sem-2-unit-03-8-17.jpg'],
			Date : '03-Aug-2017'
		},				
		{ 
			Title: 'I Semester II Unit Test Time Table for Lower Primary', 
			Description: 'I Semester II Unit Test Time Table has been announced for Lower Primary.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/I-Sem-II-Unit-Test-17-18-Std-1.jpg','assets/img/I-Sem-II-Unit-Test-17-18-Std-2.jpg','assets/img/I-Sem-II-Unit-Test-17-18-Std-3.jpg','assets/img/I-Sem-II-Unit-Test-17-18-Std-4.jpg'],
			Date : '29-Jul-2017'
		},{ 
			Title: 'Lower Primary activities for the month of July', 
			Description: 'Photos of Lower Primary activities for the month of July.',
			ShortDescription: "Activity photos of Lower Primary.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1500533939/act_lower_pri_july_3_s7wjld.jpg',
			Image: ['assets/img/act_lower_pri_july_1.jpg','assets/img/act_lower_pri_july_2.jpg','assets/img/act_lower_pri_july_3.jpg','assets/img/act_lower_pri_july_4.jpg','assets/img/act_lower_pri_july_5.jpg','assets/img/act_lower_pri_july_6.jpg','assets/img/act_lower_pri_july_7.jpg'],
			Date : '20-Jul-2017'
		},
		{ 
			Title: 'Nursery activities for the month of June', 
			Description: 'Photos of Nursery activities for the month of June.',
			ShortDescription: "Activity photos of Nursery.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1499230353/Nur-Act_kigtxd.jpg',
			Image: ['assets/img/act_of_nur1.jpg','assets/img/act_of_nur2.jpg','assets/img/act_of_nur3.jpg','assets/img/act_of_nur4.jpg'],
			Date : '05-Jul-2017'
		},
		{ 
			Title: 'I Semester I Unit Time Table for Higher Primary', 
			Description: 'I Semester I Unit Time Table has been announced for Higher Primary.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/1-sem-1-unit-17-5-6-7.jpg'],
			Date : '29-Jun-2017'
		},
		{ 
			Title: 'Yoga Day celebration - 2017', 
			Description: 'Photos of International Yoga Day celebration at Dhruvadhama Campus on 21-6-2017.',
			ShortDescription: "Photos of Yoga Day celebration - 2017.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1498728433/yoga-17-18_bqgwcd.jpg',
			Image: ['assets/img/yogaday-2017-1.jpg','assets/img/yogaday-2017-2.jpg','assets/img/yogaday-2017-3.jpg','assets/img/yogaday-2017-4.jpg','assets/img/yogaday-2017-5.jpg','assets/img/yogaday-2017-6.jpg','assets/img/yogaday-2017-7.jpg','assets/img/yogaday-2017-8.jpg','assets/img/yogaday-2017-9.jpg','assets/img/yogaday-2017-10.jpg','assets/img/yogaday-2017-11.jpg','assets/img/yogaday-2017-12.jpg'],
			Date : '29-Jun-2017'
		},
		{ 
			Title: 'Higher Primary - Spiritual Education Programme', 
			Description: 'Photos of the Spiritual Education Programme conducted for Std VI and Std VII on 22nd and 23rd of June 2017. The speaker on both the occasions was Smt. Mohini Acharya',
			ShortDescription: "Photos of Spiritual Education Programme.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1498718149/Spiritual-pri-2_tjkf70.jpg',
			Image: ['assets/img/Spiritual-pri-1.jpg','assets/img/Spiritual-pri-2.jpg','assets/img/Spiritual-pri-3.jpg','assets/img/Spiritual-pri-4.jpg','assets/img/Spiritual-pri-5.jpg','assets/img/Spiritual-pri-6.jpg'],
			Date : '29-Jun-2017'
		},
		{ 
			Title: 'I Semester I Unit Time Table for Lower Primary', 
			Description: 'I Semester I Unit Time Table has been announced for Lower Primary.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/I-Unit-I-17.jpg','assets/img/I-Unit-II-17.jpg','assets/img/I-Unit-III-17.jpg','assets/img/I-Unit-IV-17.jpg'],
			Date : '28-Jun-2017'
		},
		{
			Title: 'Higher Primary - Environment Day Celebration',
			Description: 'World Environment Day celebrated on 5th June, Monday, in Dhruvadhama Campus by Higher Primary students.',
			ShortDescription: "Photos of Environment Day Celebration.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1497002780/env-hp-10_urr8kv.jpg',
			Image: ['assets/img/env-hp-14.jpg', 'assets/img/env-hp-13.jpg', 'assets/img/env-hp-12.jpg', 'assets/img/env-hp-11.jpg', 'assets/img/env-hp-10.jpg', 'assets/img/env-hp-9.jpg', 'assets/img/env-hp-8.jpg', 'assets/img/env-hp-7.jpg', 'assets/img/env-hp-6.jpg', 'assets/img/env-hp-5.jpg', 'assets/img/env-hp-4.jpg', 'assets/img/env-hp-3.jpg', 'assets/img/env-hp-2.jpg', 'assets/img/env-hp-1.jpg'],
			Date: '9-Jun-2017'
		},
		{
			Title: 'Nursery - Reopening Day',
			Description: 'Photos of Reopening Day of Nursery.',
			ShortDescription: "Photos of Reopening Day of Nursery.",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1496212736/nursery-reopening-1_d7jtue.jpg',
			Image: ['assets/img/nursery-reopening-1.jpg', 'assets/img/nursery-reopening-2.jpg', 'assets/img/nursery-reopening-3.jpg', 'assets/img/nursery-reopening-4.jpg', 'assets/img/nursery-reopening-5.jpg'],
			Date: '31-May-2017'
		},
		{
			Title: 'Playhome - Opening Day',
			Description: 'Photos of Opening Day of Playhome.',
			ShortDescription: "Photos of Opening Day of Playhome",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1495535854/ph-opening-2_mjzoc5.jpg',
			Image: ['assets/img/ph-opening-1.jpg', 'assets/img/ph-opening-2.jpg', 'assets/img/ph-opening-3.jpg', 'assets/img/ph-opening-4.jpg', 'assets/img/ph-opening-5.jpg', 'assets/img/ph-opening-6.jpg'],
			Date: '23-May-2017'
		}, {
			Title: 'Activity & Sarawathi Pooja - Lower Primary',
			Description: 'Photos of Activity & Sarawathi Pooja for Lower Primary.',
			ShortDescription: "Photos of Activity & Sarawathi Pooja for Lower Primary",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1490355066/LP-Act-7_e9uwvq.jpg',
			Image: ['assets/img/LP-Act-1.jpg', 'assets/img/LP-Act-2.jpg', 'assets/img/LP-Act-3.jpg', 'assets/img/LP-Act-4.jpg', 'assets/img/LP-Act-5.jpg', 'assets/img/LP-Act-6.jpg', 'assets/img/LP-Act-7.jpg', 'assets/img/LP-Act-8.jpg', 'assets/img/LP-Act-9.jpg', 'assets/img/LP-Act-10.jpg'],
			Date: '24-Mar-2017'
		}, {
			Title: 'II Semester Exam Time Table for Higher Primary',
			Description: 'II Semester Exam Time Table has been announced for Higher Primary.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/HP.jpg'],
			Date: '07-Mar-2017'
		}, {
			Title: 'II Semester Exam Time Table for Lower Primary',
			Description: 'II Semester Exam Time Table has been announced for Lower Primary.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/I.jpg', 'assets/img/II.jpg', 'assets/img/III.jpg', 'assets/img/IV.jpg'],
			Date: '06-Mar-2017'
		}, {
			Title: 'Annual Appraisal Time Table for Nursery',
			Description: 'Annual Appraisal Time Table has been announced for Nursery.',
			Thumbnail: 'assets/img/timetable.png',
			Image: ['assets/img/Annual-Appraisal-KG-I.jpg', 'assets/img/Annual-Appraisal-KG-II.jpg'],
			Date: '06-Mar-2017'
		}, {
			Title: "Annual Awards Function",
			Description: "Annual Awards Function 2016-17 was held on 21-01-2017, Saturday. The chief guest for the occasion was Dr. Mahesh.",
			ShortDescription: "Photos of Annual Awards Function",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1486041349/Annual-Awards-1_cocczj.jpg',
			Image: ['assets/img/Annual-Awards-1.jpg', 'assets/img/Annual-Awards-2.jpg', 'assets/img/Annual-Awards-3.jpg', 'assets/img/Annual-Awards-4.jpg', 'assets/img/Annual-Awards-5.jpg', 'assets/img/Annual-Awards-6.jpg', 'assets/img/Annual-Awards-7.jpg', 'assets/img/Annual-Awards-8.jpg', 'assets/img/Annual-Awards-9.jpg', 'assets/img/Annual-Awards-10.jpg'],
			Date: '02-Feb-2017'
		}, {
			Title: "Republic Day Celebration",
			Description: "Photos of Republic Day Celebration. The chief guest for the day was Dr. Nagesh Hegde.",
			ShortDescription: "Photos of Republic Day Celebration",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1486040919/Republic-5_bopfy9.jpg',
			Image: ['assets/img/Republic-5.jpg', 'assets/img/Republic-1.jpg', 'assets/img/Republic-2.jpg', 'assets/img/Republic-3.jpg', 'assets/img/Republic-4.jpg'],
			Date: '02-Feb-2017'
		}, {
			Title: "Nursery Cultural & Literary Competitions",
			Description: "Photos of Nursery Cultural & Literary Competitions.",
			ShortDescription: "Photos of Nursery Cultural & Literary Competitions",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1484817175/Nur-Lit_Cul-3_uihsnq.jpg',
			Image: ['assets/img/Nur-Lit&Cul-1.jpg', 'assets/img/Nur-Lit&Cul-2.jpg', 'assets/img/Nur-Lit&Cul-3.jpg', 'assets/img/Nur-Lit&Cul-4.jpg', 'assets/img/Nur-Lit&Cul-5.jpg', 'assets/img/Nur-Lit&Cul-6.jpg'],
			Date: '19-Jan-2017'
		}, {
			Title: "Nursery Sankranthi Worksheet",
			Description: "Photos of Nursery Sankranthi Worksheet.",
			ShortDescription: "Photos of Nursery Sankranthi Worksheet",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1484310416/20170113_105909_z4unmz.jpg',
			Image: ['assets/img/Nursery-Sankranthi.jpg'],
			Date: '13-Jan-2017'
		}, {
			Title: "Annual Prize Distribution - Lower Primary",
			Description: "Photos of Annual Prize Distribution for Lower Primary.",
			ShortDescription: "Photos of Annual Prize Distribution for Lower Primary",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1484048559/Prize-Dist-LP-9_kfhp8n.jpg',
			Image: ['assets/img/Prize-Dist-LP-1.jpg', 'assets/img/Prize-Dist-LP-2.jpg', 'assets/img/Prize-Dist-LP-3.jpg', 'assets/img/Prize-Dist-LP-4.jpg', 'assets/img/Prize-Dist-LP-5.jpg', 'assets/img/Prize-Dist-LP-6.jpg', 'assets/img/Prize-Dist-LP-7.jpg', 'assets/img/Prize-Dist-LP-8.jpg', 'assets/img/Prize-Dist-LP-9.jpg', 'assets/img/Prize-Dist-LP-10.jpg'],
			Date: '10-Jan-2017'
		}, {
			Title: "Playhome Sports Day",
			Description: "Sports day photos of Playhome.",
			ShortDescription: "Sports day photos of Playhome",
			Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1483618482/Playhome-Sports-Day-1_pdnnkl.png',
			Image: ['assets/img/Playhome-Sports-Day-1.png', 'assets/img/Playhome-Sports-Day-2.png', 'assets/img/Playhome-Sports-Day-3.png', 'assets/img/Playhome-Sports-Day-4.png'],
			Date: '05-Jan-2017'
		}]
}

@Component({
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class TheSchoolNewsComponent implements OnInit, AfterViewInit {
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
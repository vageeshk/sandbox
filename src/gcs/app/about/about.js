var gcsAbout = angular.module('gcsAbout', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('about', { url: "/about", templateUrl: "app/about/about.html", controller: 'aboutCtrl' })
            .state('test', { url: "/previewRegistrationForm", templateUrl: "app/about/test.html", controller: 'aboutCtrl' });
	}
	gcsAbout.config(config);
} ());

(function () {
	service.$inject = ['$http', '$q', 'APP_API_URL', 'INST_ID', '$log'];
	function service($http, $q, apiUrl, instId, $log) {
		this.getTFTD = function () {
			var url = apiUrl + 'tftd/';
			var deferred = $q.defer();
			$http.get(url + instId)
				.success(function (data, status, headers, config) { deferred.resolve(data); })
				.error(function () { deferred.reject("An error occured while fetching items"); });
			return deferred.promise;
		}
		this.getNews = function () {
			var news = [
				{ 
					Title: 'Lower Primary activities for the month of August', 
					Description: 'Photos of Lower Primary activities for the month of August.',
					ShortDescription: "Activity photos of Lower Primary.",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1503468635/Low_pri_act_aug_6_f7sdzn.jpg',
					Image: ['assets/img/Low_pri_act_aug_1.jpeg','assets/img/Low_pri_act_aug_2.jpeg','assets/img/Low_pri_act_aug_3.jpeg','assets/img/Low_pri_act_aug_4.jpeg','assets/img/Low_pri_act_aug_5.jpeg','assets/img/Low_pri_act_aug_6.jpeg'],
                    Date : '23-Aug-2017'
				},
				{ 
					Title: 'Sri Krishna Janmashtami celebration in Play home.', 
					Description: "Photos of Sri Krishna Janmashtami celebrated in Play home on 19/08/2017, Saturday.",
                    ShortDescription: 'Photos of Sri Krishna Janmashtami celebrated in Play home',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1503380469/kri_fun_6_lp6hvn.jpg',
                    Image: ['assets/img/kri_fun_1.jpg','assets/img/kri_fun_2.jpg','assets/img/kri_fun_3.jpg','assets/img/kri_fun_4.jpg','assets/img/kri_fun_5.jpg','assets/img/kri_fun_6.jpg'],
                    Date : '22-Aug-2017'
				},
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
					Image: ['assets/img/env-hp-14.jpg','assets/img/env-hp-13.jpg','assets/img/env-hp-12.jpg','assets/img/env-hp-11.jpg','assets/img/env-hp-10.jpg','assets/img/env-hp-9.jpg','assets/img/env-hp-8.jpg','assets/img/env-hp-7.jpg','assets/img/env-hp-6.jpg','assets/img/env-hp-5.jpg','assets/img/env-hp-4.jpg','assets/img/env-hp-3.jpg','assets/img/env-hp-2.jpg','assets/img/env-hp-1.jpg'],
                    Date : '9-Jun-2017'
				},
				{ 
					Title: 'Nursery - Reopening Day', 
					Description: 'Photos of Reopening Day of Nursery.',
					ShortDescription: "Photos of Reopening Day of Nursery.",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1496212736/nursery-reopening-1_d7jtue.jpg',
					Image: ['assets/img/nursery-reopening-1.jpg','assets/img/nursery-reopening-2.jpg','assets/img/nursery-reopening-3.jpg','assets/img/nursery-reopening-4.jpg','assets/img/nursery-reopening-5.jpg'],
                    Date : '31-May-2017'
				},
				{ 
					Title: 'Playhome - Opening Day', 
					Description: 'Photos of Opening Day of Playhome.',
					ShortDescription: "Photos of Opening Day of Playhome",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1495535854/ph-opening-2_mjzoc5.jpg',
					Image: ['assets/img/ph-opening-1.jpg','assets/img/ph-opening-2.jpg','assets/img/ph-opening-3.jpg','assets/img/ph-opening-4.jpg','assets/img/ph-opening-5.jpg','assets/img/ph-opening-6.jpg'],
                    Date : '23-May-2017'
				},{ 
					Title: 'Activity & Sarawathi Pooja - Lower Primary', 
					Description: 'Photos of Activity & Sarawathi Pooja for Lower Primary.',
					ShortDescription: "Photos of Activity & Sarawathi Pooja for Lower Primary",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1490355066/LP-Act-7_e9uwvq.jpg',
					Image: ['assets/img/LP-Act-1.jpg','assets/img/LP-Act-2.jpg','assets/img/LP-Act-3.jpg','assets/img/LP-Act-4.jpg','assets/img/LP-Act-5.jpg','assets/img/LP-Act-6.jpg','assets/img/LP-Act-7.jpg','assets/img/LP-Act-8.jpg','assets/img/LP-Act-9.jpg','assets/img/LP-Act-10.jpg'],
                    Date : '24-Mar-2017'
				},{ 
					Title: 'II Semester Exam Time Table for Higher Primary', 
					Description: 'II Semester Exam Time Table has been announced for Higher Primary.',
					Thumbnail: 'assets/img/timetable.png',
					Image: ['assets/img/HP.jpg'],
                    Date : '07-Mar-2017'
				},{ 
					Title: 'II Semester Exam Time Table for Lower Primary', 
					Description: 'II Semester Exam Time Table has been announced for Lower Primary.',
					Thumbnail: 'assets/img/timetable.png',
					Image: ['assets/img/I.jpg','assets/img/II.jpg','assets/img/III.jpg','assets/img/IV.jpg'],
                    Date : '06-Mar-2017'
				},{ 
					Title: 'Annual Appraisal Time Table for Nursery', 
					Description: 'Annual Appraisal Time Table has been announced for Nursery.',
					Thumbnail: 'assets/img/timetable.png',
					Image: ['assets/img/Annual-Appraisal-KG-I.jpg','assets/img/Annual-Appraisal-KG-II.jpg'],
                    Date : '06-Mar-2017'
				},{ 
					Title: "Annual Awards Function", 
					Description: "Annual Awards Function 2016-17 was held on 21-01-2017, Saturday. The chief guest for the occasion was Dr. Mahesh.",
                    ShortDescription: "Photos of Annual Awards Function",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1486041349/Annual-Awards-1_cocczj.jpg',
                    Image: ['assets/img/Annual-Awards-1.jpg','assets/img/Annual-Awards-2.jpg','assets/img/Annual-Awards-3.jpg','assets/img/Annual-Awards-4.jpg','assets/img/Annual-Awards-5.jpg','assets/img/Annual-Awards-6.jpg','assets/img/Annual-Awards-7.jpg','assets/img/Annual-Awards-8.jpg','assets/img/Annual-Awards-9.jpg','assets/img/Annual-Awards-10.jpg'],
                    Date : '02-Feb-2017'
				},{ 
					Title: "Republic Day Celebration", 
					Description: "Photos of Republic Day Celebration. The chief guest for the day was Dr. Nagesh Hegde.",
                    ShortDescription: "Photos of Republic Day Celebration",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1486040919/Republic-5_bopfy9.jpg',
                    Image: ['assets/img/Republic-5.jpg','assets/img/Republic-1.jpg','assets/img/Republic-2.jpg','assets/img/Republic-3.jpg','assets/img/Republic-4.jpg'],
                    Date : '02-Feb-2017'
				},{ 
					Title: "Nursery Cultural & Literary Competitions", 
					Description: "Photos of Nursery Cultural & Literary Competitions.",
                    ShortDescription: "Photos of Nursery Cultural & Literary Competitions",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1484817175/Nur-Lit_Cul-3_uihsnq.jpg',
                    Image: ['assets/img/Nur-Lit&Cul-1.jpg','assets/img/Nur-Lit&Cul-2.jpg','assets/img/Nur-Lit&Cul-3.jpg','assets/img/Nur-Lit&Cul-4.jpg','assets/img/Nur-Lit&Cul-5.jpg','assets/img/Nur-Lit&Cul-6.jpg'],
                    Date : '19-Jan-2017'
				},{ 
					Title: "Nursery Sankranthi Worksheet", 
					Description: "Photos of Nursery Sankranthi Worksheet.",
                    ShortDescription: "Photos of Nursery Sankranthi Worksheet",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1484310416/20170113_105909_z4unmz.jpg',
                    Image: ['assets/img/Nursery-Sankranthi.jpg'],
                    Date : '13-Jan-2017'
				},{ 
					Title: "Annual Prize Distribution - Lower Primary", 
					Description: "Photos of Annual Prize Distribution for Lower Primary.",
                    ShortDescription: "Photos of Annual Prize Distribution for Lower Primary",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1484048559/Prize-Dist-LP-9_kfhp8n.jpg',
                    Image: ['assets/img/Prize-Dist-LP-1.jpg','assets/img/Prize-Dist-LP-2.jpg','assets/img/Prize-Dist-LP-3.jpg','assets/img/Prize-Dist-LP-4.jpg','assets/img/Prize-Dist-LP-5.jpg','assets/img/Prize-Dist-LP-6.jpg','assets/img/Prize-Dist-LP-7.jpg','assets/img/Prize-Dist-LP-8.jpg','assets/img/Prize-Dist-LP-9.jpg','assets/img/Prize-Dist-LP-10.jpg'],
                    Date : '10-Jan-2017'
				},{ 
					Title: "Playhome Sports Day", 
					Description: "Sports day photos of Playhome.",
                    ShortDescription: "Sports day photos of Playhome",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1483618482/Playhome-Sports-Day-1_pdnnkl.png',
                    Image: ['assets/img/Playhome-Sports-Day-1.png','assets/img/Playhome-Sports-Day-2.png','assets/img/Playhome-Sports-Day-3.png','assets/img/Playhome-Sports-Day-4.png'],
                    Date : '05-Jan-2017'
				},{ 
					Title: 'II Semester II Unit Test Time Table for Lower Primary', 
					Description: 'II Semester II Unit Test Time Table has been announced for Lower Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '05-Jan-2017'
				},{ 
					Title: 'II Semester II Unit Test Time Table for Higher Primary', 
					Description: 'II Semester II Unit Test Time Table has been announced for Higher Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '05-Jan-2017'
				},{ 
					Title: "Nursery Sports Day", 
					Description: "Photos of Nursery Sports Day held on 16th December 2016.",
                    ShortDescription: "Photos of Nursery Sports Day",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,q_90,w_100/v1482304484/Nur-SportsDay-4_mfqw6u.jpg',
                    Image: ['assets/img/Nur-SportsDay-1.jpg','assets/img/Nur-SportsDay-2.jpg','assets/img/Nur-SportsDay-3.jpg','assets/img/Nur-SportsDay-4.jpg'],
                    Date : '21-Dec-2016'
				},{ 
					Title: "World Reading Day", 
					Description: "Photos of World Reading Day held on 25th November 2016.",
                    ShortDescription: "Photos of World Reading Day",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1480330171/Reading-Day-1_t8lgtq.jpg',
                    Image: ['assets/img/Reading-Day-1.jpg','assets/img/Reading-Day-2.jpg','assets/img/Reading-Day-3.jpg'],
                    Date : '28-Nov-2016'
				},{ 
					Title: "Science Model Making Competition(Std VII)", 
					Description: "Photos of Science Model Making Competition for Std VII, conducted on 22nd November 2016, Tuesday.",
                    ShortDescription: "Photos of Science Model Making Competition(Std VII)",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1480330244/Science-Model-Making-3_v425yc.jpg',
                    Image: ['assets/img/Science-Model-Making-1.jpg','assets/img/Science-Model-Making-2.jpg','assets/img/Science-Model-Making-3.jpg','assets/img/Science-Model-Making-4.jpg','assets/img/Science-Model-Making-5.jpg','assets/img/Science-Model-Making-6.jpg','assets/img/Science-Model-Making-7.jpg','assets/img/Science-Model-Making-8.jpg'],
                    Date : '28-Nov-2016'
				},{ 
					Title: 'II Semester I Unit Test Time Table for Lower Primary', 
					Description: 'II Semester I Unit Test Time Table has been announced for Lower Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '25-Nov-2016'
				},{ 
					Title: 'II Semester I Unit Test Time Table for Higher Primary', 
					Description: 'II Semester I Unit Test Time Table has been announced for Higher Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '25-Nov-2016'
				},{ 
					Title: "Children's Day Celebrations", 
					Description: "Photos of Children's Day Celebrations held on 14th November 2016.",
                    ShortDescription: "Photos of Children's Day Celebrations",
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1479711218/Childrens-Day-2016-10_uaoavh.jpg',
                    Image: ['assets/img/Childrens-Day-2016-1.jpg','assets/img/Childrens-Day-2016-2.jpg','assets/img/Childrens-Day-2016-3.jpg','assets/img/Childrens-Day-2016-4.jpg','assets/img/Childrens-Day-2016-5.jpg','assets/img/Childrens-Day-2016-6.jpg','assets/img/Childrens-Day-2016-7.jpg','assets/img/Childrens-Day-2016-8.jpg','assets/img/Childrens-Day-2016-9.jpg','assets/img/Childrens-Day-2016-10.jpg'],
                    Date : '21-Nov-2016'
				},{ 
					Title: 'Sports Day - Higher Primary', 
					Description: "Photos of Sports Day held on 8th November 2016.",
                    ShortDescription: 'Photos of Sports Day - Higher Primary',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1479711302/Sports-Day-HP-2_xt1xxq.jpg',
                    Image: ['assets/img/Sports-Day-HP-1.jpg','assets/img/Sports-Day-HP-2.jpg','assets/img/Sports-Day-HP-3.jpg','assets/img/Sports-Day-HP-4.jpg','assets/img/Sports-Day-HP-5.jpg','assets/img/Sports-Day-HP-6.jpg'],
                    Date : '21-Nov-2016'
				},{ 
					Title: 'Annual Sports Meet & Cultural Competitions - Lower Primary', 
					Description: "Photos of Annual Sports Meet (Std I to IV) and Cultural Competitions for Std III and IV ( Solo dance, Making of photo frame and decoration on OHP Sheet) held during the month of October 2016.",
                    ShortDescription: 'Photos of Annual Sports Meet & Cultural Competitions - Lower Primary',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1478253861/sports-lp-5_ojjusi.jpg',
                    Image: ['assets/img/sports-lp-1.jpg','assets/img/sports-lp-2.jpg','assets/img/sports-lp-3.jpg','assets/img/sports-lp-4.jpg','assets/img/sports-lp-5.jpg','assets/img/sports-lp-6.jpg','assets/img/sports-lp-7.jpg','assets/img/sports-lp-8.jpg','assets/img/sports-lp-9.jpg','assets/img/sports-lp-10.jpg','assets/img/sports-lp-11.jpg','assets/img/sports-lp-12.jpg'],
                    Date : '04-Nov-2016'
				},{ 
					Title: 'Krishnajanmashtami - Playhome', 
					Description: "Photos of Krishnajanmashtami Celebrations for Playhome.",
                    ShortDescription: 'Photos of Krishnajanmashtami Celebrations for Playhome',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1474443412/ph-krishna-1_slupt0.jpg',
                    Image: ['assets/img/ph-krishna-1.jpeg','assets/img/ph-krishna-2.jpg','assets/img/ph-krishna-3.jpg','assets/img/ph-krishna-4.jpg','assets/img/ph-krishna-5.jpg','assets/img/ph-krishna-6.jpg'],
                    Date : '21-Sep-2016'
				},{ 
					Title: 'Independence Week - Playhome', 
					Description: "Photos of Independence Week Celebrations for Playhome.",
                    ShortDescription: 'Photos of Independence Week Celebrations for Playhome',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1474449194/image4_c6z6oq.jpg',
                    Image: ['assets/img/ph-indp-1.jpg','assets/img/ph-indp-2.jpeg','assets/img/ph-indp-3.jpeg','assets/img/ph-indp-4.jpeg','assets/img/ph-indp-5.jpeg'],
                    Date : '21-Sep-2016'
				},{ 
					Title: 'First Term Appraisal Time Table for Nursery', 
					Description: 'First Term Appraisal Time Table has been announced for Nursery.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '12-Sep-2016'
				},{ 
					Title: 'I Semester Exam Time Table for Higher Primary', 
					Description: 'I Semester Exam Time Table has been announced for Higher Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '12-Sep-2016'
				},{ 
					Title: 'I Semester Exam Time Table for Lower Primary', 
					Description: 'I Semester Exam Time Table has been announced for Lower Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '12-Sep-2016'
				},{ 
					Title: 'Talents Search, Elocution Competition and Spiritual Day of lower primary', 
					Description: "Photos of Talents Search, Elocution Competition and Spiritual Day of lower primary.",
                    ShortDescription: 'Photos of Talents Search, Elocution Competition and Spiritual Day of lower primary',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1472733256/TalentEloc-1_tfbscf.jpg',
                    Image: ['assets/img/TalentEloc-1.jpg','assets/img/TalentEloc-2.jpg','assets/img/TalentEloc-3.jpg','assets/img/TalentEloc-4.jpg','assets/img/TalentEloc-5.jpg','assets/img/TalentEloc-6.jpg','assets/img/TalentEloc-7.jpg','assets/img/TalentEloc-8.jpg','assets/img/TalentEloc-9.jpg'],
                    Date : '01-Sep-2016'
				},{ 
					Title: 'Spiritual Education Programme (Std VI & VII)', 
					Description: "Spiritual Education Programme was held on 24th August 2016, Wednesday for Std VI and VII. The speaker for the occasion was Smt. Kshama Nargund and she spoke on the topic 'Guru Shishya Sambandha'.",
                    ShortDescription: 'Spiritual Education Programme held for Std VI & VII',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1472452372/SpiritualProgVI-VII-1_qbhysn.jpg',
                    Image: ['assets/img/SpiritualProgVI-VII-1.jpg','assets/img/SpiritualProgVI-VII-2.jpg','assets/img/SpiritualProgVI-VII-3.jpg','assets/img/SpiritualProgVI-VII-4.jpg','assets/img/SpiritualProgVI-VII-5.jpg','assets/img/SpiritualProgVI-VII-6.jpg'],
                    Date : '29-Aug-2016'
				},{ 
					Title: 'Independence Day Celebrations at Dhruvadhama', 
					Description: 'Independence Day Celebrations held at Dhruvadhama on 15-Aug-2016.',
                    ShortDescription: 'Independence Day Celebrations held at Dhruvadhama on 15-Aug-2016',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1471846312/dhruvadhama-indp-3_dywul0.jpg',
                    Image: ['assets/img/dhruvadhama-indp-1.jpg','assets/img/dhruvadhama-indp-2.jpg','assets/img/dhruvadhama-indp-3.jpg','assets/img/dhruvadhama-indp-4.jpg','assets/img/dhruvadhama-indp-5.jpg','assets/img/dhruvadhama-indp-6.jpg','assets/img/dhruvadhama-indp-7.jpg','assets/img/dhruvadhama-indp-8.jpg','assets/img/dhruvadhama-indp-9.jpg'],
                    Date : '22-Aug-2016'
				},{ 
					Title: 'Nursery Activity - Independence Day', 
					Description: 'Nursery Activity for Independence Day.',
                    ShortDescription: 'Nursery Activity for Independence Day',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_scale,h_75,r_6,w_100/v1471430082/Nur-IndpDay-1_xaxxez.jpg',
                    Image: ['assets/img/Nur-IndpDay-1.jpg','assets/img/Nur-IndpDay-5.jpg','assets/img/Nur-IndpDay-2.jpg','assets/img/Nur-IndpDay-3.jpg','assets/img/Nur-IndpDay-4.jpg'],
                    Date : '17-Aug-2016'
				},{ 
					Title: 'Lower Primary Activities - July & August', 
					Description: 'Lower Primary Activities in the month of July & August.',
                    ShortDescription: 'Lower Primary Activities in the month of July & August',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1471412544/lp-july-aug-6_n4zcdd.jpg',
                    Image: ['assets/img/lp-july-aug-1.jpg','assets/img/lp-july-aug-2.jpg','assets/img/lp-july-aug-3.jpg','assets/img/lp-july-aug-4.jpg','assets/img/lp-july-aug-5.jpg','assets/img/lp-july-aug-6.jpg'],
                    Date : '17-Aug-2016'
				},
                { 
					Title: 'Nursery Activities - June & July', 
					Description: 'Nursery Activities in the month June & July.',
                    ShortDescription: 'Nursery Activities in the month June & July',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1470829332/Nur-Jun-1_uhf444.jpg',
                    Image: ['assets/img/Nur-Jun-1.jpg','assets/img/Nur-Jun-2.jpg','assets/img/Nur-Jun-3.jpg','assets/img/Nur-Jun-4.jpg'],
                    Date : '10-Aug-2016'
				},{ 
					Title: 'I Semester II Unit Test Time Table for Higher Primary', 
					Description: 'I Semester II Unit Test Time Table has been announced for Higher Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '2-Aug-2016'
				},{ 
					Title: 'I Semester II Unit Test Time Table for Lower Primary', 
					Description: 'I Semester II Unit Test Time Table has been announced for Lower Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '2-Aug-2016'
				},{ 
					Title: 'Spiritual Programme', 
					Description: 'Spiritual Programme was held for Std VI and VII on 14th July 2016.',
                    ShortDescription: 'Photos of Spiritual Programme (Std VI and VII)',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1469015716/spiritual-prog5_eeqou5.jpg',
                    Image: ['assets/img/spiritual-prog1.jpg','assets/img/spiritual-prog2.jpg','assets/img/spiritual-prog3.jpg','assets/img/spiritual-prog4.jpg','assets/img/spiritual-prog5.jpg','assets/img/spiritual-prog6.jpg'],
                    Date : '20-Jul-2016'
				},{ 
					Title: 'I Semester I Unit Test Time Table for Higher Primary', 
					Description: 'I Semester I Unit Test Time Table has been announced for Higher Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '28-Jun-2016'
				},{ 
					Title: 'I Semester I Unit Test Time Table for Lower Primary', 
					Description: 'I Semester I Unit Test Time Table has been announced for Lower Primary.',
					Thumbnail: 'assets/img/timetable.png',
                    Date : '27-Jun-2016'
				},{ 
					Title: 'Spiritual Education Programme', 
					Description: 'The Spiritual Education Programme was held for Std VI and VII on 23rd June 2016. The speaker on the occasion was Sri M. N. Chandrashekara.',
                    ShortDescription: 'Photos of Spiritual Education Programme (Std VI and VII)',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1466681207/spiritual-1_cvcyja.jpg', 
					Image: ['assets/img/spiritual-1.jpg','assets/img/spiritual-2.jpg','assets/img/spiritual-3.jpg','assets/img/spiritual-4.jpg','assets/img/spiritual-5.jpg','assets/img/spiritual-6.jpg'], 
					Date : '23-Jun-2016'
				},{ 
					Title: 'World Yoga Day Celebration', 
					Description: 'Photos of World Yoga Day Celebration at school on 21st June 2016.',
                    ShortDescription: 'Photos of World Yoga Day Celebration',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1466680501/yoga-4_k6wogu.jpg', 
					Image: ['assets/img/yoga-1.jpg','assets/img/yoga-2.jpg','assets/img/yoga-3.jpg','assets/img/yoga-4.jpg','assets/img/yoga-5.jpg','assets/img/yoga-6.jpg'], 
					Date : '23-Jun-2016'
				},{ 
					Title: 'Inauguration of Sri B Parthasarathy Auditorium', 
					Description: 'Photos of Inauguration of Sri B Parthasarathy Auditorium.',
                    ShortDescription: 'Photos of Inauguration of Sri B Parthasarathy Auditorium',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1466676285/audi-3_gqflx8.jpg', 
					Image: ['assets/img/audi-1.jpg','assets/img/audi-2.jpg','assets/img/audi-3.jpg','assets/img/audi-4.jpg'], 
					Date : '23-Jun-2016'
				},{ 
					Title: 'Environmental Day Celebrations', 
					Description: 'Photos of Environmental Day Celebrations held on June 5th, in GC Higher Primary Campus.',
                    ShortDescription: 'Environmental Day Celebrations held on June 5,2016',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1465901214/EnvDay7_djcchj.jpg', 
					Image: ['assets/img/EnvDay1.jpg','assets/img/EnvDay2.jpg','assets/img/EnvDay3.jpg','assets/img/EnvDay4.jpg','assets/img/EnvDay5.jpg','assets/img/EnvDay6.jpg','assets/img/EnvDay7.jpg','assets/img/EnvDay8.jpg'], 
					Date : '14-Jun-2016'
				},{ 
					Title: 'Lower Primary Computer Lab Inauguration', 
					Description: 'Lower Primary Computer Lab Inauguration was held on 30-5-2016.',
                    ShortDescription: 'Lower Primary Computer Lab Inauguration was held on 30-5-2016',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1465469293/CompLabInaug2_vi7jx1.jpg', 
					Image: ['assets/img/CompLabInaug1.jpg','assets/img/CompLabInaug2.jpg','assets/img/CompLabInaug3.jpg','assets/img/CompLabInaug4.jpg','assets/img/CompLabInaug5.jpg','assets/img/CompLabInaug6.jpg'], 
					Date : '9-Jun-2016'
				},
                { 
					Title: 'Playhome 2016-17 Reopening Day', 
					Description: 'Reopening Day Photos of Playhome 2016-17.',
                    ShortDescription: 'Reopening Day Photos of Playhome 2016-17.',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1464671985/ph-reopening-1_g9h5cj.jpg', 
					Image: ['assets/img/ph-reopening-1.jpg','assets/img/ph-reopening-2.jpg','assets/img/ph-reopening-3.jpg','assets/img/ph-reopening-4.jpg','assets/img/ph-reopening-5.jpg','assets/img/ph-reopening-6.jpg'], 
					Date : '31-May-2016'
				},
                { 
					Title: 'KG I 2016-17 Reopening Day', 
					Description: 'Reopening Day Photos of KG I 2016-17.',
                    ShortDescription: 'Reopening Day Photos of KG I 2016-17.',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1464001651/KG-Reopening_hvre8u.jpg', 
					Image: ['assets/img/KG-Reopening-1.jpg','assets/img/KG-Reopening-2.jpg','assets/img/KG-Reopening-3.jpg'], 
					Date : '23-May-2016'
				},
                { 
					Title: 'Orientation Programme For Teachers', 
					Description: 'Orientation programme for teachers regarding the topic "Refresher programme on basic working in MS Office applications". The orientation programme was held from 16th to 18th of March 2016 for Lower primary teachers and 28th to 30th of March 2016 for Higher primary teachers.',
                    ShortDescription: 'Orientation programme for teachers regarding the topic "Refresher programme on basic working in MS Office applications".',
					Thumbnail: 'http://res.cloudinary.com/hs5fb0l8g/image/upload/c_limit,h_100,r_6,w_100/v1459937149/orientation-3_drkr8y.jpg', 
					Image: ['assets/img/orientation-1.jpg','assets/img/orientation-2.jpg','assets/img/orientation-3.jpg','assets/img/orientation-4.jpg'], 
					Date : '06-Apr-2016'
				}
			];
			return news;
			
			// var url = apiUrl + 'news/';
			// var deferred = $q.defer();
			// $http.get(url+ instId)
			// .success(function(data, status, headers, config){deferred.resolve(data);})
			// .error(function(){deferred.reject("An error occured while fetching items");});
			// return deferred.promise;
		}

	}
	gcsAbout.service('aboutService', service);
} ());

(function () {
	ctrl.$inject = ['$scope', 'aboutService', 'appContext', '$log'];
	function ctrl($scope, aboutService, appContext, $log) {
		$scope.News = [];
		$scope.TFTD = [];
		$scope.init = function () {
			appContext.news = aboutService.getNews();
			$scope.News = appContext.news;
			// aboutService.getNews().then(function(d){$scope.News = d.Data;}, function(e){});
			// aboutService.getTFTD().then(function(d){$scope.TFTD = d.Data;}, function(e){});
		}
		$scope.init();
	}
	gcsAbout.controller('aboutCtrl', ctrl);
} ());

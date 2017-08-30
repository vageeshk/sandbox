var gcsNursery = angular.module('gcsNursery', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('nursery', { url: "/nursery", templateUrl: "app/nursery/nursery.html" })
			.state('nursery.ourPhilosophy', { url: "/our-philosophy", templateUrl: "app/nursery/nursery.html" })
			.state('nursery.dayAtSchool', { url: "/a-day-at-school", templateUrl: "app/nursery/dayAtSchool.html" })
			.state('nursery.culturalEvents', { url: "/cultural-events", templateUrl: "app/nursery/culturalEvents.html" })
			.state('nursery.competitions', { url: "/competitions", templateUrl: "app/nursery/competitions.html" })
			.state('nursery.technology', { url: "/technology", templateUrl: "app/nursery/technology.html" })
			.state('nursery.assessments', { url: "/assessments", templateUrl: "app/nursery/assessments.html" });
	}
	gcsNursery.config(config);
} ());
var sppuAcademics = angular.module('sppuAcademics', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('academics', { url: "/academics", templateUrl: "app/academics/academics.html" })
			.state('academics.facultyDetails', { url: "/Faculty-Details", templateUrl: "app/academics/academics.html" })
			.state('academics.courseOffered', { url: "/Course-Offered", templateUrl: "app/academics/courseOffered.html" })
	}
	sppuAcademics.config(config);
} ());
var gcsPrimary = angular.module('gcsPrimary', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('primary', { url: "/primary-school", templateUrl: "app/primary/primary.html" })
			.state('primary.academics', { url: "/academics", templateUrl: "app/primary/primary.html" })
			.state('primary.infrastructure', { url: "/infrastructure", templateUrl: "app/primary/infrastructure.html" })
			.state('primary.extraCurricularActivities', { url: "/extra-curricular-activities", templateUrl: "app/primary/extraCurricularActivities.html" })
			.state('primary.competitions', { url: "/competitions", templateUrl: "app/primary/competitions.html" })
			.state('primary.holisticDevelopment', { url: "/holistic-development", templateUrl: "app/primary/holisticDevelopment.html" })
			.state('primary.assessments', { url: "/assessments", templateUrl: "app/primary/assessments.html" });
	}
	gcsPrimary.config(config);
} ());
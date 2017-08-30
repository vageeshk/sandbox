var sppuCampusTour = angular.module('sppuCampusTour', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('campusTour', { url: "/campusTour", templateUrl: "app/campusTour/campusTour.html" });
	}
	sppuCampusTour.config(config);
} ());

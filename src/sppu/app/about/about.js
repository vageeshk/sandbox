var sppuAbout = angular.module('sppuAbout', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('about', { url: "/about", templateUrl: "app/about/about.html" });
	}
	sppuAbout.config(config);
} ());

var gcsContact = angular.module('gcsContact', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('contact', { url: "/contact-us", templateUrl: "app/contact/contact.html" })
	}
	gcsContact.config(config);
} ());
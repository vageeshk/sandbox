var sppuContact = angular.module('sppuContact', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('contact', { url: "/contact", templateUrl: "app/contact/contact.html" });
	}
	sppuContact.config(config);
} ());

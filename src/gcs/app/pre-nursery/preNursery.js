var gcsPreNursery = angular.module('gcsPreNursery', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('preNursery', { url: "/pre-nursery", templateUrl: "app/pre-nursery/preNursery.html",controller:'preNurseryCtrl' })
			.state('preNursery.ourPhilosophy', { url: "/our-philosophy", templateUrl: "app/pre-nursery/preNursery.html" })
			.state('preNursery.activities', { url: "/activities", templateUrl: "app/pre-nursery/activities.html" })
			.state('preNursery.physicalDevelopment', { url: "/physical-development", templateUrl: "app/pre-nursery/physicalDevelopment.html" })
			.state('preNursery.culturalEvents', { url: "/cultural-events", templateUrl: "app/pre-nursery/culturalEvents.html" });
			
	}
	gcsPreNursery.config(config);
} ());

//ctrl =>preNursery controller
(function(){
	preNurseryCtrl.$inject=['$scope','$state','$log'];
	function preNurseryCtrl($scope, $state,$log){
	}

	gcsPreNursery.controller('preNurseryCtrl',preNurseryCtrl);
}());
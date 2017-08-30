var sppuHome = angular.module('sppuHome', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('home', {controller:"homectrl", url: "/home", templateUrl: "app/home/home.html" })
			.state('home.calendarOfEvents', { url: "/Calendar-Of-Events", templateUrl: "app/home/calendarOfEvents.html" })
	}
	sppuHome.config(config);
} ());

(function () {
	service.$inject = ['$http', '$q', '$log'];
	function service($http, $q, $log) {
		this.getNews = function () {
			var news = [
                        { Title:"Invitation for Rasa Sanje Programme 2016", newsId:'Rasasanje-2016'},
                        { Title:"Observing Rashtriya Ekta Diwas", newsId:'Rashtriya-Ekta-Diwas'},
                        { Title:"Happy Deepavali", newsId:'happyDeepavali'},
                        { Title:"Deepavali holidays & Kannada Rajyotsava Notification", newsId:'rajyotsava'},
                        { Title:"Time table from 19th October 2016 to 22nd October 2016", newsId:'OctTimeTable'}];
			return news;
		}
	}
	sppuHome.service('homeService', service);
}());

(function () {
	ctrl.$inject = ['$scope', 'homeService', 'appContext','$compile','$timeout', '$log'];
	function ctrl($scope, homeService, appContext,$compile,$timeout,$log) {
		$scope.News = [];
        $scope.eventRender = function( event, element, view ) { 
            var elem = angular.element(element);
            elem.attr('title', event.title);
            $compile(elem)($scope);
        };
        $scope.uiConfig = {
            calendar:{
                height: 550,
                editable: true,
                header:{
                left: 'title',
                center: '',
                right: 'today prev,next'
                },
                eventRender: $scope.eventRender
            }
        };
        $scope.events = [
            {title: 'Buddha Purnima',start: new Date(2016,4,21)}
        ];
        $scope.eventSources = [$scope.events];
		$scope.init = function () {
			appContext.news = homeService.getNews();
			$scope.News = appContext.news;
		}
		$scope.init();
	}
	sppuHome.controller('homectrl', ctrl);
}());

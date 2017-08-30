var sppuNews = angular.module('sppuNews', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('news', { url: "/news/", params: {newsID: ''}, templateUrl: "app/news/news.html", controller: 'newsCtrl' });
	}
	sppuNews.config(config);
} ());


(function () {
	ctrl.$inject = ['$scope', '$state', '$log', '$stateParams', '$location', '$anchorScroll'];
	function ctrl($scope, $state, $log, $stateParams, $location, $anchorScroll) {
		if ($stateParams.newsID) {
			$location.hash($stateParams.newsID)
			$anchorScroll();
		}
	}
	sppuNews.controller('newsCtrl', ctrl)
} ());
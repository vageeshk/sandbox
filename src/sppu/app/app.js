var sppu = angular.module('sppu', ['ui.calendar','sppuHeaderModule','sppuHome','sppuAbout','sppuAcademics','sppuCampusTour','sppuContact','sppuNews']);

//configuration block
(function () {
	config.$inject = ['$provide', '$httpProvider', '$urlRouterProvider'];
	function config($provide, $httpProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home"); //default path
	};
	sppu.config(config);
} ());


(function(){
	function factory(){
		return{
			news:[]
		}
	};
	sppu.factory('appContext', factory);
}());
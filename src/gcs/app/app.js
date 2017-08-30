var gcs = angular.module('gcs', ['gcsHeaderModule','gcsAbout','gcsTheSchool','gcsPreNursery','gcsNursery','gcsPrimary','gcsContact']);

//constants
(function () {
	gcs.constant('APP_API_URL','http://ctapi.apphb.com/api/');
	gcs.constant('INST_ID','43a81016-c24a-4da6-81c2-280eb773cb48');
} ());
//configuration block
(function () {
	config.$inject = ['$provide', '$httpProvider', '$urlRouterProvider'];
	function config($provide, $httpProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/about"); //default path
	};
	gcs.config(config);
} ());
//appContext Factory
(function(){
	function factory(){
		return{
			news:[]
		}
	};
	gcs.factory('appContext', factory);
}());
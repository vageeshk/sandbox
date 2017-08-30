var gcsHeaderModule = angular.module('gcsHeaderModule',[]);
//header ui directive
(function () {
	directive.$inject = [];
    function directive() {
        return {
            restrict: 'A',
            templateUrl: 'app/header/header.html'
        };
    }
    gcsHeaderModule.directive('gcsHeader',directive);
}());

//banner ui directive
(function () {
	directive.$inject = [];
    function directive() {
        return {
            restrict: 'A',
            templateUrl: 'app/header/banner.html'
        };
    }
    gcsHeaderModule.directive('gcsBanner',directive);
}());
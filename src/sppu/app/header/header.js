var sppuHeaderModule = angular.module('sppuHeaderModule', []);
//header ui directive
(function () {
    directive.$inject = [];
    function directive() {
        return {
            restrict: 'A',
            templateUrl: 'app/header/header.html'
        };
    }
    sppuHeaderModule.directive('sppuHeader', directive);
} ());


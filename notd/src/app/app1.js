var app= angular.module('myApp', []);
app.service('id', function(){
     this.session=function(){
       console.log("service executing");
        return 10;
    }
});
app.controller('myctrl', function($scope, id,$log) {
   $scope.count=0;
  $scope.sessionCount= function(){
       $scope.count = id.session();
       $log.log($scope.count);
  $log.log("reporting from app.js");
  }
});
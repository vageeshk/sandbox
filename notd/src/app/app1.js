var app= angular.module('myApp', []);
app.service('id', function(){
     this.session=function(){
       console.log("executing session");
       return 10;
    }
});
app.controller('myctrl', function($scope, id,$log) {
  $scope.sessionCount= function(cnt){
       var x;
       $scope.count = id.session();
       $log.log($scope.count);
  $log.log("reporting from app.js");
  }
});
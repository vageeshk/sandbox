var app= angular.module('myApp', []);
app.service('id', function(){
     this.session=function(noUsers){
        return noUsers;
    }
});
app.controller('myctrl', function($scope, id,$log) {
   var x;
  $scope.sessionCount= function(){
      $scope.count = id.session(x);
  $log.log("reporting from app.js");
  }
});
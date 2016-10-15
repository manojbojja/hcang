var codeControllers = angular.module('codeController', []);

codeControllers.controller('ListController', ['$scope', '$http' , function($scope, $http) {
  

  $scope.query = "";
  
  

  $http.get('http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions&page=0').success(function(data){
    $scope.submissions = data.websites;
  });


  $scope.isFirst = function(value) {
    if (value.length > 0)
      return false;
    else 
      return true;

  };
  
}]);



codeControllers.controller('DetailsController', ['$scope', '$http', '$routeParams' , function($scope, $http, $routeParams) {
  
  $http.get('js/data.json').success(function(data){
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId
  });
  


}]);
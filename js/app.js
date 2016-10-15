'use strict'

var myApp = angular.module('myApp', ['rzModule', 'ui.bootstrap']);

myApp.controller('ecommerceSubmissions',['$scope','$http', function($scope, $http){

    $http.get('https://hackerearth.0x10.info/api/fashion?type=json&query=list_products').success(function(data){
        $scope.submissions = data.products;
        $scope.apiHits = data.quote_available;
    });

    $scope.counter = 0;  
    $scope.compilerStatus = []; 
    $scope.query = "";
    $scope.orderByModel = "";

    $scope.minValue = 300;
    $scope.maxValue = 4999;

    $scope.minRangeSlider = {
        minValue: 300,
        maxValue: 4999,
        options: {
            floor: 300,
            ceil: 7000,
            step: 1
        }
    }

    $scope.customFilter = function(submission){
        if($scope.minRangeSlider.minValue <= submission.price ){
            if($scope.minRangeSlider.maxValue >= submission.price ){
                if ($scope.query.length > 0) {
                    if(('apparel').indexOf($scope.query.toLowerCase()) != -1 && submission.category == 0){
                        return submission;
                    }
                    if(('accessories').indexOf($scope.query.toLowerCase()) != -1 && submission.category == 1){
                        return submission;
                    }
                    if(submission.name.toLowerCase().indexOf($scope.query) == -1){
                        return;
                    }
                }
                return submission;
            }
        }
        return ;
    }

    $scope.parseId = function(val){
        val.price = parseInt(val.price);
        val.rating = parseInt(val.rating);
        return val;
    }

}]);

// Create application
var myApp = angular.module('myApp', []);

sortApp.controller('mainController', function($scope, $http){
    $scope.sortType = 'name'
    $http.get('data/salaries.json').then(function(response) {
        $scope.data = response.data     
        console.log($scope.data)
    })
})


// Bind controller customersCtrl

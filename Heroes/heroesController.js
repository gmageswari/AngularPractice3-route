angular.module("myRoutingApp").controller("heroesController",['$scope','$rootScope',function($scope,$rootScope){
    $scope.heroes = $rootScope.heroes;
    $scope.goToPageCall = function(id){
        let pathVal = "heroes/" + id;
        $rootScope.goToPage(pathVal);    
    }
}]);
angular.module("myRoutingApp").controller("dashboardController",['$scope','$rootScope','$location',function($scope,$rootScope){
    $scope.topHeroes = [$rootScope.heroes[0],$rootScope.heroes[1],$rootScope.heroes[2],$rootScope.heroes[3]];
    $scope.goToPageCall = function(val){
        let linkToGo = `dashboard/${val}`;
        $rootScope.goToPage(linkToGo);
    }
}]);
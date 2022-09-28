angular.module("myRoutingApp").controller("heroesDetailsController",['$scope','$routeParams','$rootScope','$location',function($scope,$routeParams,$rootScope,$location){
    $scope.id = $routeParams.id;
    $scope.inName = $rootScope.heroes[$scope.id-1].name;
    $scope.backClicked = function(){
        $rootScope.goToPage(`back/${$location.path()}`);
        $scope.dummyArray = $rootScope.heroes.map((eachName)=>{
            if(eachName.id != $scope.id){
                return eachName;
            }
            else{
                return {
                    id : $scope.id,
                    name : $scope.inName
                };
            };
        });
        $rootScope.heroes = $scope.dummyArray;
    };
}]);
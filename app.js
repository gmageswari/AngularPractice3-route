var app = angular.module("myRoutingApp",["ngRoute"]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/dashboard',{
        controller : "dashboardController",
        templateUrl : "Dashboard/dashboard.html"
    })
    .when('/heroes',{
        controller : "heroesController",
        templateUrl : "Heroes/heroes.html"
    })
    .when('/dashboard/:id',{
        controller : "heroesDetailsController",
        templateUrl : "HeroesDetails/heroesDetails.html"
    })
    .when('/heroes/:id',{
        controller : "heroesDetailsController",
        templateUrl : "HeroesDetails/heroesDetails.html"
    })
    .otherwise('/dashboard',{
        controller : "dashboardController",
        templateUrl : "Dashboard/dashboard.html"
    });
   
}]);


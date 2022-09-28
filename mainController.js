angular.module("myRoutingApp").controller("mainController", ['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.heroes = [
        {
            id: 1,
            name: "Sk"
        },
        {
            id: 2,
            name: "Dhanush"
        },
        {
            id: 3,
            name: "Vijay"
        },
        {
            id: 4,
            name: "Ajith"
        },
        {
            id: 5,
            name: "Adharvaa"
        },
        {
            id: 6,
            name: "RajiniKanth"
        },
        {
            id: 7,
            name: "KamalHasan"
        },
        {
            id: 8,
            name: "Dulquer"
        }
    ];
    $rootScope.goToPage = function (link) {
        let pathArray = link.split('/');
        if(pathArray[0] === "back" && pathArray[2] === "dashboard"){
            link = "dashboard";
        }
        else if(pathArray[0] === "back" && pathArray[2] === "heroes"){
            link = 'heroes';
        }
        $location.path(link);  
    }
}]);
angular.module("myRoutingApp").controller("mainController", ['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.heroes = [
        {
            id: 1,
            name: "A"
        },
        {
            id: 2,
            name: "B"
        },
        {
            id: 3,
            name: "C"
        },
        {
            id: 4,
            name: "D"
        },
        {
            id: 5,
            name: "E"
        },
        {
            id: 6,
            name: "F"
        },
        {
            id: 7,
            name: "G"
        },
        {
            id: 8,
            name: "H"
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
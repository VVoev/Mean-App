app.controller('NavigationController', function ($scope) {

    $scope.navigation = [
        {name:"Home",href:"home"},
        {name:"Protoss",href:"protoss"},
        {name:"Terran",href:"terran"},
        {name:"Zerg",href:"zerg"},
        {name:"Statistics",href:"statistics"},
        {name:"Login",href:"login"},
        {name:"Register",href:"register"},
        {name:"Logout",href:"logout"},
    ];

});


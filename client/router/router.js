app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:'views/intro/intro.view.html'
        })
        .when("/home", {
            templateUrl : 'views/home/home.view.html'
        })
        .when("/login", {
            templateUrl : 'views/login/login.view.html'
        })
        .when("/register",{
            templateUrl: 'views/register/register.view.html'
        })
        .when("/logout", {
            template : "<h1>Logout</h1>"
        });
}]);
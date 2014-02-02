var routingInfoApp = angular.module('routingInfoApp', ['ngRoute', 'ngAnimate', 'routingInfoServices', 'routingInfoControllers']);

routingInfoApp.constant('routingInfoSettings', {
    apiBaseUrl: 'api/',
    timeoutMillisOrDefault: function(timeoutMillis) {
        return timeoutMillis || 1000;
    }
});

routingInfoApp.run(function($rootScope) {
    $('.tooltip-enabled').tooltip({});
    $('.popover-enabled').popover({});
});

routingInfoApp.config(['$routeProvider', 
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'app/partials/home.html',
            controller: 'RoutingInfoCtrl'
        }).
        when('/routinginfos/:msisdn', {
            templateUrl: 'app/partials/routinginfo.html',
            controller: 'RoutingInfoCtrl'
        }).
        when('/smroutinginfos/:msisdn', {
            templateUrl: 'app/partials/smroutinginfo.html',
            controller: 'SmRoutingInfoCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

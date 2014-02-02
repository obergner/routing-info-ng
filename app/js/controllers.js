var routingInfoControllers = angular.module('routingInfoControllers', ['ngRoute', 'routingInfoServices']);

routingInfoControllers.controller('NavigationBarCtrl', function ($scope, $location) {

    $scope.getSmRoutingInfo = function(msisdn, timeoutMillis) {
        $location.path('/smroutinginfos/' + msisdn).search('timeout-millis', timeoutMillis);
    }

    $scope.isInvalidMsisdn = function(msisdn) {
        if (msisdn === undefined) {
            return true;
        }
        return !/^[1-9]\d{6,14}$/.test(msisdn);
    }
});

routingInfoControllers.controller('RoutingInfoCtrl', function ($scope, $routeParams, RoutingInfos, HttpSupport) {

    (function() {
        $('.popover-enabled').popover({});
    })();

    if ($routeParams.msisdn) {
        $scope.$parent.msisdn = $routeParams.msisdn;

        RoutingInfos.get($routeParams.msisdn, $routeParams['timeout-millis'], function(data, status, headers) {
            $scope.httpStatusCode = status;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(status);
            $scope.routingInfo = data;
        }, function(data, status, headers) {
            $scope.httpStatusCode = status;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(status);
            $scope.routingInfo = data || {};
        });
    }
});

routingInfoControllers.controller('SmRoutingInfoCtrl', function ($scope, $routeParams, SmRoutingInfos, HttpSupport) {

    (function() {
        $('.popover-enabled').popover({});
    })();

    if ($routeParams.msisdn) {
        $scope.$parent.msisdn = $routeParams.msisdn;

        SmRoutingInfos.get($routeParams.msisdn, $routeParams['timeout-millis'], function(data, status, headers) {
            $scope.httpStatusCode = status;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(status);
            $scope.smRoutingInfo = data;
        }, function(data, status, headers) {
            $scope.httpStatusCode = status;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(status);
            $scope.smRoutingInfo = data || {};
        });
    }
});

var routingInfoControllers = angular.module('routingInfoControllers', ['ngRoute', 'ngResource', 'routingInfoServices']);

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
        //$scope.$parent.invokeTimeoutMillis = $routeParams['timeout-millis'];

        RoutingInfos.get({msisdn: $routeParams.msisdn, 'timeout-millis': $routeParams['timeout-millis']}, function(routingInfo, getResponseHeaders) {
            $scope.httpStatusCode = 200;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(200);
            $scope.routingInfo = routingInfo;
        }, function(httpResponse) {
            $scope.httpStatusCode = httpResponse.status;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(httpResponse.status);
            $scope.routingInfo = {};
        });
    }
});

routingInfoControllers.controller('SmRoutingInfoCtrl', function ($scope, $routeParams, SmRoutingInfos, HttpSupport) {

    (function() {
        $('.popover-enabled').popover({});
    })();

    if ($routeParams.msisdn) {
        $scope.$parent.msisdn = $routeParams.msisdn;
        //$scope.$parent.$apply($scope.$parent.invokeTimeoutMillis = $routeParams['timeout-millis']);

        SmRoutingInfos.get({msisdn: $routeParams.msisdn, 'timeout-millis': $routeParams['timeout-millis']}, function(smRoutingInfo, getResponseHeaders) {
            $scope.httpStatusCode = 200;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(200);
            $scope.smRoutingInfo = smRoutingInfo;
        }, function(httpResponse) {
            $scope.httpStatusCode = httpResponse.status;
            $scope.httpStatusMessage = HttpSupport.mapHttpStatusCode(httpResponse.status);
            $scope.smRoutingInfo = {};
        });
    }
});

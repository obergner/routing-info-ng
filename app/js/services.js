var routingInfoServices = angular.module('routingInfoServices', []);

routingInfoServices.factory('RoutingInfos', function ($http, routingInfoSettings) {
    'use strict';

    var getRoutingInfo = function(msisdn, invokeTimeoutMillis, onSuccess, onError) {
        $http.get("api/routinginfos/" + msisdn + ".json", { params: { 'timeout-millis': routingInfoSettings.timeoutMillisOrDefault(invokeTimeoutMillis) } })
        .success(onSuccess)
        .error(onError);
    };

    return {
        get: getRoutingInfo
    };
});

routingInfoServices.factory('SmRoutingInfos', function ($http, routingInfoSettings) {
    'use strict';

    var getSmRoutingInfo = function(msisdn, invokeTimeoutMillis, onSuccess, onError) {
        $http.get("api/smroutinginfos/" + msisdn + ".json", { params: { 'timeout-millis': routingInfoSettings.timeoutMillisOrDefault(invokeTimeoutMillis) } })
        .success(onSuccess)
        .error(onError);
    };

    return {
        get: getSmRoutingInfo
    };
});

routingInfoServices.factory('HttpSupport', function () {
    'use strict';

    var HttpStatusCodeMap = {
        200: 'OK',
        400: 'Bad Request',
        404: 'Not Found',
        405: 'Method Not Allowed',
        418: 'I\'m a teapot',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        504: 'Gateway Timeout'
    };

    var map = function(httpStatusCode) {
        return HttpStatusCodeMap[httpStatusCode] || 'UNKNOWN';
    };

    return {
        mapHttpStatusCode: map
    };
});

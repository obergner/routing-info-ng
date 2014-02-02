var routingInfoServices = angular.module('routingInfoServices', ['ngResource']);

routingInfoServices.factory('RoutingInfos', function ($resource) {
    return $resource('api/routinginfos/:msisdn.json', {}, {
        get:    {method: 'GET', params: {'timeout-millis': 1000}}
    });
});

routingInfoServices.factory('SmRoutingInfos', function ($resource) {
    return $resource('api/smroutinginfos/:msisdn.json', {}, {
        get:    {method: 'GET', params: {'timeout-millis': 1000}}
    });
});

routingInfoServices.factory('HttpSupport', function () {
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

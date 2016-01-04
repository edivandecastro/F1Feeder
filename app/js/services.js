var f1FeederAppSevice = angular.module('F1FeederApp.Service', []);

f1FeederAppSevice.factory('ErgastApiService', function($http) {
  var ergastAPI = {};

  ergastAPI.getDrivers = function() {
    return $http({
      method: 'JSONP',
      url:    'http://ergast.com/api/f1/2015/driverStandings.json?callback=JSON_CALLBACK'
    });
  };

  ergastAPI.getDriverDetails = function (id) {
    return $http({
      method: 'JSONP',
      url:    'http://ergast.com/api/f1/2015/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
    });
  };

  ergastAPI.getDriverRaces = function (id) {
    return $http({
      method: 'JSONP',
      url:    'http://ergast.com/api/f1/2015/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
    });
  };
  
  return ergastAPI;
});

var f1FeederAppSevice = angular.module('F1FeederApp.Service', []);

f1FeederAppSevice.factory('ErgastApiService', function($http) {
  var ergastAPI = {};

  ergastAPI.getDrivers = function() {
    return $http({
      method: 'JSONP',
      url:    'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
    });
  }
  
  return ergastAPI;
});
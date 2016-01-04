'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp', [
  'ngRoute',
  'F1FeederApp.Driver',
  'F1FeederApp.Service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/drivers', {
      templateUrl: 'partials/drivers.html',
      controller: 'DriversController'
    }).
    when('/drivers/:id', {
      templateUrl: 'partials/driver.html',
      controller: 'DriverController'
    }).
    otherwise({
      redirecTo: '/'
    });
}]);

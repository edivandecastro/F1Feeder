'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp', [
  'ngRoute',
  'F1FeederApp.Driver'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

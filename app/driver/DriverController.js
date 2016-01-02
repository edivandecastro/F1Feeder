angular.module('F1FeederApp.Driver', [])

.controller('DriverController', function ($scope, ErgastApiService) {
  $scope.nameField = null;
  $scope.driverList = [];

  ErgastApiService.getDrivers().success(function(response) {
    $scope.driverList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});

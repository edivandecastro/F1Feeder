var f1FeederAppController = angular.module('F1FeederApp.Driver', []);

f1FeederAppController.controller('DriverController', function ($scope, ErgastApiService) {
  $scope.nameField = null;
  $scope.driverList = [];
  $scope.searchFilter = function (driver) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName) || re.test(driver.Constructors[0].name);
  };

  ErgastApiService.getDrivers().success(function(response) {
    console.debug($scope.nameField);
    $scope.driverList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});

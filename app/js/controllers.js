var f1FeederAppController = angular.module('F1FeederApp.Driver', []);

f1FeederAppController.controller('DriversController', function ($scope, ErgastApiService) {
  $scope.nameField = null;
  $scope.driverList = [];
  $scope.searchFilter = function (driver) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName) || re.test(driver.Constructors[0].name);
  };

  ErgastApiService.getDrivers().success(function (response) {
    $scope.driverList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});

f1FeederAppController.controller('DriverController', function ($scope, $routeParams, ErgastApiService) {
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ErgastApiService.getDriverDetails($scope.id).success(function (response) {
    if ($scope.id) {
      $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    }
    else {
     $scope.driver = null; 
    }
  });

  ErgastApiService.getDriverRaces($scope.id).success(function (response) {
    $scope.races = response.MRData.RaceTable.Races;
  });
});

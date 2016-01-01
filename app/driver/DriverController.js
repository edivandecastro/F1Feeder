angular.module('F1FeederApp.Driver', [])

.controller('DriverController', function ($scope) {
  $scope.driverList = [
    {
      Driver: {
        givenName:  'Sebastian',
        familyName: 'Vettel'
      },
      points: 322,
      nationality: "German",
      Constructors: [
        {name: "Red Bull"}
      ]
    },
    {
      Driver: {
        givenName:  'Fernando',
        familyName: 'Alonso'
      },
      points: 207,
      nationality: "Spanish",
      Constructors: [
        {name: "Ferrari"}
      ]
    }
  ]
});

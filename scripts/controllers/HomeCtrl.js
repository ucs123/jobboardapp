'use strict';
angular.module('empLogApp').controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject=['$scope', 'globalData','$http', '$filter', '$location', 'httpservice','copydataservice']
function HomeCtrl($scope, globalData, $http, $filter, $location, httpservice,copydataservice) {
    httpservice.getdata(globalData.jobdataurl).success(function(data) {
      $scope.data = data.jobs;
      $scope.viewdetail = function(data){
           copydataservice.setdata(data);
            $location.path('/detail');
      };
    })
    .error(function() {
    alert('unable to load data');
  });
  $scope.removeFilter = function(filterterms){
       $scope.filterstr[filterterms] = '';
  };
  $scope.submitjob = function(data){

            $http.put(globalData.jobdataurl,data)
            .success(function () {
                console.log('submited' + data);
            })
            .error(function () {
               console.log('not submited');
            });
  };
}
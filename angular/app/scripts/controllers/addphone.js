'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AddphoneCtrl
 * @description
 * # AddphoneCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('AddPhoneCtrl', function ($scope, Phone, $log) {
    $scope.newPhone = {};

    $scope.addPhone = function(){
      $log.info($scope.newPhone);
      Phone.add($scope.newPhone)
        .then(function(createdPhone){
          $scope.phones.push(createdPhone.data);
        })
        .finally(function(){
          $scope.newPhone = '';
        });

    };
  });

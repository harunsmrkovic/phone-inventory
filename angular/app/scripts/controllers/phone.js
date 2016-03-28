'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('PhoneCtrl', function ($scope, Phone) {
    Phone.getAll().then(function(phones){
      $scope.phones = phones.data.data;
    });

    $scope.deletePhone = function(phone){
      Phone.destroy(phone._id).then(function(){
        $scope.phones.splice($scope.phones.indexOf(phone), 1);
      });
    };

    $scope.addInstance = function(phone){
      Phone.addInstance(phone._id, {'color': phone.newInventory.color, 'quantity': phone.newInventory.quantity})
      .then(function(){
        phone.inventory.push(phone.newInventory);
      })
      .finally(function(){
        phone.newInventory = {};
      });
    };
  });

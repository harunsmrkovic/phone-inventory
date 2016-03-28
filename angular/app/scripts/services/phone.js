'use strict';

/**
 * @ngdoc service
 * @name angularApp.phone
 * @description
 * # phone
 * Service in the angularApp.
 */
angular.module('angularApp')
  .service('Phone', function ($http) {
    var phone = {};
    var apiRoot = 'http://localhost:3030';

    phone.getAll = function(){
      return $http.get([apiRoot, 'phones'].join('/'));
    };

    phone.get = function(id){
      return $http.get([apiRoot, 'phones', id].join('/'));
    };

    phone.add = function(newPhone){
      return $http.post([apiRoot, 'phones'].join('/'), newPhone);
    };

    phone.update = function(id, newData){
      return $http.put([apiRoot, 'phones', id].join('/'), newData);
    };

    phone.destroy = function(id){
      return $http.delete([apiRoot, 'phones', id].join('/'));
    };

    phone.addInstance = function(id, instanceData){
      return phone.get(id).then(function(phoneData){
        phoneData = phoneData.data;
        phoneData.inventory.push(instanceData);
        return phone.update(id, phoneData);
      });
    };

    phone.updateInstanceQuantity = function(id, instanceId, quantity){
      return phone.get(id).then(function(phoneData){
        phoneData = phoneData.data;
        phoneData.inventory = phoneData.inventory.map(function(i){
          if(i._id === instanceId){
            i.quantity = quantity;
          }
          return i;
        });
        return phone.update(id, phoneData);
      });
    };

    phone.destroyInstance = function(id, instanceIdToRemove){
      return phone.get(id).then(function(phoneData){
        phoneData = phoneData.data;
        phoneData.inventory = phoneData.inventory.filter(function(i){ return i._id !== instanceIdToRemove; });
        return phone.update(id, phoneData);
      });
    };

    return phone;
  });

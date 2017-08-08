'use strict';

// Register `photoList` component, along with its associated controller and template
angular.
  module('photoList').
  component('photoList', {
    templateUrl: 'photo-list/photo-list.template.html',
    controller: ['$http', function PhotoListController($http) {
      var self = this;
      self.orderProp = 'location';

      $http.get('photos/photos.json').then(function(response) {
        self.photos = response.data;
      });

      self.addReview = function(photo) {
      photo.reviews.push(this.review);
      this.review = {};
      };

    }]
  });

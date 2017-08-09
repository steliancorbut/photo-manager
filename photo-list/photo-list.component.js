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

      self.review = {};
      
      self.addReview = function(photo) {
      photo.reviews.push(self.review);
      self.review = {};
      };

      self.newPhoto = {
        "photoId": 3,
        "photodate": 2014, 
        "imageUrl": "img/photos/super-happy-familly.jpg", 
        "location": "enter location", 
        "tags": "enter tags",
        "description": "enter a long description",
        "reviews": [{
        "stars": 1,
        "body": "Not OK",
        "author": "john.dean2@example.org"
        }]
      };

      self.hideform = true;
      self.showPhotoForm = function(){
        self.hideform = false;
      };

      self.addPhoto = function(){
        self.newPhoto.photoId = 33;
        self.newPhoto.reviews = [{
        "stars": 1,
        "body": "Not OK",
        "author": "john.dean33@example.org"
        }];
        self.photos.push(self.newPhoto);
        self.hideform = true;
      };

    }]
  });

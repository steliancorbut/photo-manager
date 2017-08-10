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
      
      // used by the form who upload a photo
      self.newPhoto = {
        "photoId": 3,
        "photodate": 2014, 
        "imageUrl": "img/photos/dog.jpg", 
        "location": "enter location", 
        "tags": "enter tags",
        "description": "enter a long description",
        "reviews": [{
        "stars": 1,
        "body": "Not OK",
        "author": "john.dean2@example.org"
        }]
      };
      
      self.review = {};

      // add a review to a photo - method
      self.addReview = function(photo) {
      photo.reviews.push(self.review);
      self.review = {};
      };


      self.hideform = true;

      // show the form used to upload a photo - method
      self.showPhotoForm = function(){
        self.hideform = false;
      };

      // add a photo to photos array - action for form formAddPhoto
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

//script.js

   var hungerSpa = angular.module('hungerSpa', ['ngRoute']);

   // configure our routes
   hungerSpa.config(function($routeProvider) {
       $routeProvider

           .when('/', {
               templateUrl : 'pages/home.html',
               controller  : 'mainController'
           })

           .when('/gettoken', {
               templateUrl : 'pages/gettoken.html',
               controller  : 'tokenController'
           })

           .when('/user', {
               templateUrl : 'pages/user.html',
               controller  : 'userController'
           })

           .when('/restaurants', {
               templateUrl : 'pages/restaurants.html',
               controller  : 'restaurantsController'
           })

           .when('/chipotle', {
               templateUrl : 'pages/chipotle.html',
               controller  : 'chipotleController'
           });
   });

   // create the controller and inject Angular's $scope
   hungerSpa.controller('mainController', function($scope) {
   });

   hungerSpa.controller('tokenController', function($scope) {
   });

   hungerSpa.controller('userController', function($scope) {
   });

   hungerSpa.controller('restaurantsController', function($scope) {
   });

   hungerSpa.controller('chipotleController', function($scope) {
   });

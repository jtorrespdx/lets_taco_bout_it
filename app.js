var tacoBout = angular.module('tacoBout', ['ui.router']);

tacoBout.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });
});

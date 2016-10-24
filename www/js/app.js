// Femetrom App

// angular.module is a global place for creating, registering and retrieving Angular modules
angular.module('femeApp', ['ngRoute', 'ngCordova', 'femetromAppControllers', 'femetromAppServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/landing', {
    templateUrl: 'partials/landing.html',
    controller: ''
  }).
  when('/documents', {
    templateUrl: 'partials/documents.html',
    controller: 'DocController'
  }).
  when('/document', {
    templateUrl: 'partials/documentView.html',
    controller: 'DocViewController'
  }).
  when('/projects', {
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController'
  }).
  when('/news', {
    templateUrl: 'partials/news.html',
    controller: 'NewsController'
  }).
  when('/newsDetail', {
    templateUrl: 'partials/newsDetailView.html',
    controller: 'NewsViewController'
  }).
  when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: ''
  }).
  otherwise({
    redirectTo :'/landing'
  });
}])

.run(function() {
  /*console.log("App Running");*/
})




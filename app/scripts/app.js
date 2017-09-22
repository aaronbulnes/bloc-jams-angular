(function() {
     function config($stateProvider, $locationProvider) {

  $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

$stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             controller: 'Album as album'
             controller: 'CollectionCtrl as collection',
             templateUrl: '/templates/landing.html'

     }
 
     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();

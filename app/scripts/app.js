
(function() {
<<<<<<< HEAD
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
=======
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            })
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection.html'
            });
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
>>>>>>> checkpoint-3

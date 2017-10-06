
(function() {
<<<<<<< HEAD
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
=======
>>>>>>> checkpoint-4
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
<<<<<<< HEAD
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection.html'
=======
>>>>>>> checkpoint-4
            });
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
<<<<<<< HEAD
>>>>>>> checkpoint-3
=======
>>>>>>> checkpoint-4

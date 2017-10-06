
(function() {
<<<<<<< HEAD
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
=======
>>>>>>> checkpoint-5
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            })
        $stateProvider
            .state('landing', {
                url: '/',
<<<<<<< HEAD
=======
                controller: 'LandingCtrl as landing',
>>>>>>> checkpoint-5
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
<<<<<<< HEAD
<<<<<<< HEAD
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection.html'
=======
>>>>>>> checkpoint-4
=======
            })
            .state('collection', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
>>>>>>> checkpoint-5
            });
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
<<<<<<< HEAD
})();
<<<<<<< HEAD
>>>>>>> checkpoint-3
=======
>>>>>>> checkpoint-4
=======
})();
>>>>>>> checkpoint-5

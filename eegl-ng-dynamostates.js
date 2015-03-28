/*
 * eegl-ng-dynamostates
 * 

 * Version: 0.1.0
 * License: MIT
 */

angular.module('eegl-ng-dynamostates', [])
  .provider('router', function ($stateProvider) {
 
    var routeCollections
    
    this.$get = function($state) {
      return {
        setUpRoutes: function () {

          // Load dynamic routes
          for (var i = 0; i < routeCollections.length; i++) {
            var _state = routeCollections[i]

            if (!$state.get( _state.state )) {
              $stateProvider.state(_state.state, {
                url: _state.slug,
                controller: _state.controller,
                templateUrl: _state.templateUrl,
                data: _state.data
              })
            }

          }
        }
      }
    }
 
    this.setCollection = function (routes) {
      routeCollections = routes
    }
  })
  // .run(function (router) {
  //   router.setUpRoutes()
  // })
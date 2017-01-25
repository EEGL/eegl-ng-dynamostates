(function() {
  'use strict'

  /*
   * eegl-ng-dynamostates
   *

   * Version: 0.2.0
   * License: MIT

   * To Do:
   *  add config interface to default values
   */

  angular.module('eegl-ng-dynamostates', [
    'ui.router'
  ])
    .provider('eeglRouter', function ($stateProvider) {

      var routeCollections

      this.$get = function($state) {
        var type = Function.prototype.call.bind( Object.prototype.toString )

        function addRoute(_state) {
          if (_state.name && !$state.get( _state.name ) && _state.state ) {
            $stateProvider.state(_state.name, _state.state)
          }
        }
        return {
          setUpRoutes: function ( routes ) {
            if (routes) {
              routeCollections = routes
            }
            // Load dynamic routes
            if( type( routeCollections ) === '[object Object]' ) {
              for (var _key in routeCollections) {
                addRoute( routeCollections[_key] )
              }
            }
            if( type( routeCollections ) === '[object Array]' ) {
              for (var i = 0; i < routeCollections.length; i++) {
                addRoute( routeCollections[i] )
              }
            }
          }
        }
      }

      this.setCollection = function (routes) {
        routeCollections = routes
      }
    })
    .run(function (eeglRouter) {
      eeglRouter.setUpRoutes()
    })
})();

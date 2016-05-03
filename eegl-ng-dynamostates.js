(function() {
  'use strict'

  /*
   * eegl-ng-dynamostates
   *

   * Version: 0.1.3
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
          if (!$state.get( _state.state ) && _state.state) {
            var _newState = {}
            if( !_state.state ) { return }
            _newState.url = '/' + _state.state
            if( _state.url ) {
              _newState.url = _state.url
            }
            if( _state.controller ) {
              _newState.controller = _state.controller
            }
            if( _state.template ) {
              _newState.template = _state.template
            }
            if( _state.templateUrl ) {
              _newState.templateUrl = _state.templateUrl
            }
            if( _state.data ) {
              _newState.data = _state.data
            }

            $stateProvider.state(_state.slug, _newState)
          }
        }
        return {
          setUpRoutes: function () {
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

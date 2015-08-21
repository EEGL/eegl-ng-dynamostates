'use strict'

/*
 * eegl-ng-dynamostates
 * 

 * Version: 0.1.0
 * License: MIT

 * To Do:
 *  add config interface to default values
 */

angular.module('eegl-ng-dynamostates', [])
  .provider('router', function ($stateProvider) {
 
    var routeCollections
    
    this.$get = function($state) {
      var type = Function.prototype.call.bind( Object.prototype.toString )

      function addRoute(_state) {
        if (!$state.get( _state.slug ) && _state.slug) {
          $stateProvider.state(_state.slug, {
            url: '/' + _state.slug,
            controller: _state.controller ? _state.controller : 'SubpageCtr',
            templateUrl: _state.templateUrl ? _state.templateUrl : '/templates/subpage.html',
            data: _state.data ? _state.data : ''
          })
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
  .run(function (router) {
    router.setUpRoutes()
  })
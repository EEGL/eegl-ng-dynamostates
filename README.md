#eegl-ng-dynamostates

Dynamically loading states for UI Router, from a JS array of objects / JSON file.

## Format

```js
[{
  name: 'home', // /state name
  state: { // this object gets passed to $stateProvider.state()
    controller: 'homeCtr',
    controllerAs: 'vm',
    templateUrl: '/templates/home.html',
    data: {}
  }
}]
```

## Get Started

Install with `bower`:

```shell
bower install eegl-ng-dynamostates
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/eegl-ng-dynamostates/eegl-ng-dynamostates.js"></script>
```

In your application controller:

```js
angular.module('myApp', [
    'ui.router',
    'eegl-ng-dynamostates'
  ])
  .config(function(eeglRouterProvider) {
    eeglRouterProvider.setCollection( arrayOfObjects )
  })
  .controller('MainController', function ($scope, eeglRouter) {
    $scope.reload = function() {
      eeglRouter.setUpRoutes()
    }
  })
```

## Credits
Inspired by this article: [Setting up states from a json file in angularjs applications](http://gonzalo123.com/2014/06/30/setting-up-states-from-a-json-file-in-angularjs-applications/) by Gonzalo Ayuso

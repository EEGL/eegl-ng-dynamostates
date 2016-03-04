#eegl-ng-dynamostates

Dynimac states for UI Router, loaded from a JS array of objects / JSON file.
Supports custom data.

```js
[{
  state: 'home',
  controller: 'homeCtr',
  templateUrl: '/templates/home.html',
  data: {
    // any custom data that's needed
    slug: 'home',
    title: 'Home',
    description: '',
    keywords: ''
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

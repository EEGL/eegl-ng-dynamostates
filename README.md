#eegl-ng-dynamostates

Dynimac states for UI Router, loaded from a JS array of objects / JSON file.
Supports custom data.

```js
[{
  state: 'home',
  controller: 'homeCtr',
  templateUrl: '/templates/home.html',
  data: {
    slug: 'home',
    title: 'Home',
    seoDescription: '',
    seoKeywords: ''
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
  .config(function(routerProvider) {
    routerProvider.setCollection( arrayOfObjects )
  })
  .controller('MainController', function ($scope, router) {
    $scope.reload = function() {
      router.setUpRoutes()
    }
  })
```

## Credits
Inspired by this article: [Setting up states from a json file in angularjs applications](http://gonzalo123.com/2014/06/30/setting-up-states-from-a-json-file-in-angularjs-applications/) by Gonzalo Ayuso
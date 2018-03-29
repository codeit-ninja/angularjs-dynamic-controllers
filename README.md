# angularjs-dynamic-controllers
Dynamically load controllers in AngularJS

### Demo
https://codepen.io/richardmauritz/project/editor/ZwapEa

### Installation
Include the script in the head of your tag

```
<script src="ng-dynamic-controllers.min.js"></script>
```

Remove the `ng-app` directive. `ng-dynamic-controllers` will manually bootstrap the application.
The name of the module is `['app']`.

```
angular.module('app', [])
```

Make this module the root module of your application.

### How to use?

Put all your controllers inside the following folder:

```
src/application/controllers/
```

The name of the controller given in the `ng-controller="THIS NAME"` will be also the name it will look for inside the controllers folder.

```
ng-controller="bonjour" => src/application/controllers/bonjour.controller.js
ng-controller="hello" => src/application/controllers/hello.controller.js
```

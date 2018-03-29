# angularjs-dynamic-controllers
Dynamically load controllers in AngularJS

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

/**
 * Feedback provided by @Sam Onela added into code
 *
 * @version 	v1.0.1
 * @link 	https://codereview.stackexchange.com/questions/190788/script-to-load-controllers-dynamically-for-angularjs/190805#190805
 */
window.addEventListener('DOMContentLoaded', function()
{
	var promises = [];
	var ngApp = document.querySelectorAll('[ng-app]')[0];
	var ngControllers = document.querySelectorAll('[ng-controller]');
	
	// Throw warning if angular is not found
	if(typeof angular == 'undefined')
	{
		console.warn("ng-include-controllers error: Angular not found, operation canceled.");
		return;
	}
	
	// Throw warning if ng-app directive exists. Script will bootstrap the application manually
	if(ngApp)
	{
		console.warn("Please remove the ng-app directive. `ng-include-controllers` will bootstrap the application manually.");
		console.warn("This will also most likely fix the 'Uncaught Error: [$injector:modulerr]' error.");
	}
	
	// Append the scripts
	for(var i = 0;i < ngControllers.length;i++)
	{
		var promise = new Promise(function(resolve, reject) {
			var src = 'src/application/controllers/'+ ngControllers[i].getAttribute('ng-controller') + '.controller.js';
			var script = document.createElement('script');
				script.setAttribute('src', src);

			document.head.appendChild(script);
			
			script.addEventListener('load', resolve.bind(null, script));
		});
		
		// Push promises to array to resolve them all together later on
		promises.push(promise);
	}
	
	// Resolve all promises then bootstrap the app
	// Without the use of promises, the bootstrap will start before all scripts are included
	// This results into an error
	Promise.all(promises).then(angular.bootstrap.bind(null, document, ['app']));
});

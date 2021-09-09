/**
 * Feedback provided by @Sam Onela added into code
 *
 * @version 	v2.0.1
 * @link 	https://codereview.stackexchange.com/questions/190788/script-to-load-controllers-dynamically-for-angularjs/190805#190805
 */
window.addEventListener('DOMContentLoaded', function () {
    const ngApp = document.querySelectorAll('[ng-app]')[0];
    const ngControllers = document.querySelectorAll('[ng-controller]');

    // Throw warning if angular is not found
    if (typeof angular == 'undefined') throw new Error('ng-include-controllers error: Angular not found.')

    // Throw warning if ng-app directive exists. Script will bootstrap the application manually
    if (ngApp) {
        console.warn("Please remove the ng-app directive. `ng-include-controllers` will bootstrap the application manually.");
        console.warn("This will also most likely fix the 'Uncaught Error: [$injector:modulerr]' error.");
    }

    const promises = [...ngControllers].map(controller => new Promise(resolve => {
			const script = document.createElement('script');
				  script.setAttribute('src', 'src/application/controllers/' + controller.getAttribute('ng-controller') + '.controller.js');
				  script.addEventListener('load', resolve.bind(null, script));
			document.head.appendChild(script);
		})
	)

    // Resolve all promises then bootstrap the app
    // Without the use of promises, the bootstrap will start before all scripts are included
    // This results into an error
    Promise.all(promises).then(angular.bootstrap.bind(null, document, ['app']));
});

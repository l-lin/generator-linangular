(function() {
	'use strict';
	angular.module('<%= _.slugify(appname) %>App', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
	])
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'app/module1/main.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
})();

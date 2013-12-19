(function() {
	'use strict';
	angular.module('<%= _.slugify(appname) %>', [
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

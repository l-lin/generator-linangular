(function() {
	'use strict';
	angular.module('<%= _.slugify(appname) %>')
	.controller('MainCtrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
})();

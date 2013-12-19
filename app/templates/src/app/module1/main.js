(function() {
	'use strict';
	angular.module('<%= _.slugify(appname) %>App')
	.controller('MainCtrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
})();

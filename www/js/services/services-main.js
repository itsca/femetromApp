var femetromAppServices = angular.module("femetromAppServices", []);

femetromAppServices.factory('MainFactory', function() {
	var routTo = function(route) {
		window.location.href = '#/' + route;
	}
	return {
		routTo: routTo
	};
});
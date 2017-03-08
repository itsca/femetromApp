femetromAppServices.factory('projectsFactory', function projectsFactory($http) {
	var currDocURL,
	getProjects = function() {
	    var result = {};
	    var url = 'http://www.femetrom.go.cr/es/proyectos-json';
	    result = $http.get(url);
	    //console.debug(result);
	    return result
  	}
	return {
		getProjects: getProjects
	};
});
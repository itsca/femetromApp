femetromAppServices.factory('projectsFactory', function projectsFactory($http) {
	var currDocURL,
	getProjects = function() {
	    var result = {};
	    var url = 'http://javierescalante.info/drupal8/proyectos';
	    result = $http.get(url);
	    //console.debug(result);
	    return result
  	}
	return {
		getProjects: getProjects
	};
});
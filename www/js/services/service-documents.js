femetromAppServices.factory('documentsFactory', function documentsFactory($http) {
	var currDocURL,
	getDocuments = function() {
	    var result = {};
	    var url = 'http://www.femetrom.go.cr/es/documentos-json';
	    result = $http.get(url);
	    //console.debug(result);
	    return result
  	},
  	getDocURL = function() {
	    return currDocURL
  	},
  	setDocUrl = function(docURL) {
  		currDocURL = docURL;
  	};
	return {
		getDocuments: getDocuments,
		getDocURL: getDocURL,
		setDocUrl: setDocUrl
	};
});
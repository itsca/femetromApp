femetromAppServices.factory('newsFactory', function newsFactory($http) {
	var currNewsURL,
	getNews = function() {
	    var result = {};
	    var url = 'http://www.femetrom.go.cr/es/noticias-json';
	    result = $http.get(url);
	    //console.debug(result);
	    return result
  	},
  	getNewsURL = function() {
	    return currNewsURL
  	},
  	setNewsUrl = function(newsURL) {
  		currNewsURL = newsURL;
  	};
	return {
		getNews: getNews,
		getNewsURL: getNewsURL,
		setNewsUrl: setNewsUrl
	};
});
femetromAppControllers.controller('NewsController', function NewsController($scope, documentsFactory, newsFactory, $location, $sce) {
   //Functions
   $scope.$sce = $sce;
   $scope.openNews = function(newsURL) {
   	 var regex = /<a.*?href=['"](.*?)['"]/;
   	 var href = regex.exec(newsURL)[1];
   	 newsFactory.setNewsUrl(href);
   	 $location.url("/newsDetail");
   };
   $scope.getImgUrl = function(imgString) {
   	var str = imgString;
	var regex = /<img.*?src=['"](.*?)['"]/;
	var src = regex.exec(str)[1];
	return src;
   };
   $scope.parseImgUrls = function(rawData) {
   	for (var i = 0; i < rawData.length; i++) {
   		var imgUrl = $scope.getImgUrl(rawData[i].field_imagen_noticia);
   		rawData[i].field_imagen_noticia = imgUrl;
   	};
   };
   newsFactory.getNews().success(function(data) {
	    	$scope.news = data;
	    	$scope.parseImgUrls(data);
	    })
});
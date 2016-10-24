femetromAppControllers.controller('NewsViewController', function NewsViewController($scope, $sce, newsFactory) {
   //Codigo Controlador
   console.log("NEWS DETAIL CONTROLLER");
   $scope.currentURL = $sce.trustAsResourceUrl(newsFactory.getNewsURL());
});
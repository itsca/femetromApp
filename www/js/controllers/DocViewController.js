femetromAppControllers.controller('DocViewController', function DocViewController($scope, $sce, documentsFactory) {
   //Codigo Controlador
   //console.debug("doc view controller!")
   $scope.findInDoc = function() {
   	console.log("findInDoc function");
   	document.getElementById('docFrame').contentWindow.find();
   };
   var rawURL = documentsFactory.getDocURL(),
   	   parsedURL = rawURL.replace(/\\/g, "/");
   console.log(parsedURL);
   $scope.currentURL =  $sce.trustAsResourceUrl("https://docs.google.com/gview?embedded=true&url="+parsedURL);
   console.log($scope.currentURL);
});
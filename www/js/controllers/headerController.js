femetromAppControllers.controller('headerController', function headerController($rootScope, $location) {
   var history = [];
    $rootScope.$on('$routeChangeSuccess', function() {
        history.push($location.$$path);
        if ($location.$$path === "/landing") {
        	jQuery(".back-button").hide();
        }else {
        	jQuery(".back-button").show();
        };
    });
    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };
});
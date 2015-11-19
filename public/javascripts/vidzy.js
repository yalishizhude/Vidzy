var app = angular.module('Vidzy', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
$routeProvider
    .when('/', {
	    templateUrl: 'partials/home.html',
	    controller: 'HomeCtrl'
	})
    .when('/add-video', {
        templateUrl: 'partials/video-form.html',
        controller: 'AddVideoCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
app.controller('HomeCtrl', ['$scope', '$resource', 
function($scope, $resource){
    var Videos = $resource('/api/videos');
    Videos.query(function(videos){
        $scope.videos = videos;
    });
}]);
app.controller('AddVideoCtrl', ['$scope', '$resource', '$location',
function($scope, $resource, $location){
    $scope.save = function(){
        var Videos = $resource('/api/videos');
        Videos.save($scope.video, function(){
            $location.path('/');
        });
    };
}]);
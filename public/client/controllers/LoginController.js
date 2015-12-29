/**
 * Created by Tommy_Phan on 20/11/2015.
 */
angular.module('myApp').controller('LoginController',['$scope','$http','Authentication','$state','$location',function($scope,$http,Authentication,$state,$location){
    $scope.authentication = Authentication;
    console.log(Authentication);
    $scope.error = $location.search().err;

    if($scope.authentication.user){
        $state.go('main');
    }

    $scope.login = function(){
        $scope.error  = null;
        $http.post('/api/auth/login',$scope.credentials)
            .success(function (response) {
                $scope.authentication.user = response;
                $state.go('main');
            }).error(function (response) {
                console.log(response);
                $scope.error = response.message || response;
            });

    };
    $scope.signup = function(){
        console.log('abc');
        $scope.error = null;
        $http.post('/api/auth/signup',$scope.credentials)
            .success(function (response) {
                $scope.authentication.user = response;
                $state.go('main');
            }).error(function (response) {
                console.log(response);
                $scope.error = response.message || response;
            });
    };
}]);
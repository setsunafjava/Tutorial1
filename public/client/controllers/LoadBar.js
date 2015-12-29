/**
 * Created by Tommy_Phan on 20/11/2015.
 */
angular.module('myApp').controller('ExampleCtrl', function ($scope, $http, $timeout, cfpLoadingBar) {


    $scope.start = function() {
        cfpLoadingBar.start();
    };

    $scope.complete = function () {
        cfpLoadingBar.complete();
    }


    // fake the initial load so first time users can see it right away:
    $scope.start();
    $scope.fakeIntro = true;
    $timeout(function() {
        $scope.complete();
        $scope.fakeIntro = false;
    }, 1000);


});
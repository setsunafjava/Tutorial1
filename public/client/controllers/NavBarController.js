/**
 * Created by Tommy_Phan on 21/11/2015.
 */
angular.module('myApp').controller('NavBarController',['$scope','Authentication',function($scope,Authentiction){
    $scope.authentication = Authentiction;

}]);
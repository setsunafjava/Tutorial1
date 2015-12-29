/**
 * Created by Tommy_Phan on 20/11/2015.
 */
angular.module('myApp').config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main',{
        url : '/',
        templateUrl :'/client/views/main.html',
        controller : function(cfpLoadingBar,$timeout){
            cfpLoadingBar.start();
            $timeout(function() {
                cfpLoadingBar.complete();
            }, 1000);
        }
    }).state('login',{
        url : '/login',
        templateUrl:  '/client/views/login.html',
        controller : function(cfpLoadingBar,$timeout){
            cfpLoadingBar.start();
            $timeout(function() {
                cfpLoadingBar.complete();
            }, 1000);
        }

    }).state('signup',{
        url : '/signup',
        templateUrl: '/client/views/signup.html',
        controller : function(cfpLoadingBar,$timeout){
            cfpLoadingBar.start();
            $timeout(function() {
                cfpLoadingBar.complete();
            }, 1000);
        }
    })

});
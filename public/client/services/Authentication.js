/**
 * Created by Tommy_Phan on 21/11/2015.
 */
angular.module('myApp').factory('Authentication', ['$window',
    function ($window) {
        console.log($window.user);
        var auth = {
            user: $window.user
        };

        return auth;
    }
]);

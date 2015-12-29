/**
 * Created by Tommy_Phan on 20/11/2015.
 */
angular.module('myApp').config(function(cfpLoadingBarProvider){
   cfpLoadingBarProvider.includeSpinner = true;

}).controller('ExampleCtrl', function ($scope, $http, $timeout, cfpLoadingBar) {
   $scope.posts = [];
   $scope.section = null;
   $scope.subreddit = null;
   $scope.subreddits = ['cats', 'pics', 'funny', 'gaming', 'AdviceAnimals', 'aww'];

   var getRandomSubreddit = function() {
      var sub = $scope.subreddits[Math.floor(Math.random() * $scope.subreddits.length)];

      // ensure we get a new subreddit each time.
      if (sub == $scope.subreddit) {
         return getRandomSubreddit();
      }

      return sub;
   };

   $scope.fetch = function() {
      $scope.subreddit = getRandomSubreddit();
      $http.jsonp('http://www.reddit.com/r/' + $scope.subreddit + '.json?limit=50&jsonp=JSON_CALLBACK').success(function(data) {
         $scope.posts = data.data.children;
      });
   };


});;
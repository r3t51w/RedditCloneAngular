angular.module('redditClone',['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl:'/home.html',
      controller:'MainCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])
.factory('posts', [function(){
  var o={
    posts: [
      {title: "Post 1", upvotes: 10},
      {title: "Post 2", upvotes: 7},
      {title: "Post 3", upvotes: 9},
      {title: "Post 4", upvotes: 11},
      {title: "Post 5", upvotes: 6},
      {title: "Post 6", upvotes: 3},
      {title: "Post 7", upvotes: 5}
    ]
  };
  return o;
}])
.controller('MainCtrl',[
'$scope','posts',
function($scope,posts){
  $scope.test = "Post List";
  $scope.posts = posts.posts
  /*[
    {title: "Post 1", upvotes: 10},
    {title: "Post 2", upvotes: 7},
    {title: "Post 3", upvotes: 9},
    {title: "Post 4", upvotes: 11},
    {title: "Post 5", upvotes: 6},
    {title: "Post 6", upvotes: 3},
    {title: "Post 7", upvotes: 5}
  ]*/;
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ""){return;}
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link,
      });
      $scope.title='';
      $scope.link='';
  };
  $scope.incrementUpvotes= function(post){
    post.upvotes += 1;
  };
}]);

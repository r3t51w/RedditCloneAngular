angular.module('redditClone',[])
.controller('MainCtrl',[
'$scope',
function($scope){
  $scope.test = "test phrase";
  $scope.posts =[
    {title: "Post 1", upvotes: 10},
    {title: "Post 2", upvotes: 7},
    {title: "Post 3", upvotes: 9},
    {title: "Post 4", upvotes: 11},
    {title: "Post 5", upvotes: 6},
    {title: "Post 6", upvotes: 3},
    {title: "Post 7", upvotes: 5}
    ];
}
]);

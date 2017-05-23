angular.module('MyApp')
  .controller('NavbarCtrl', ['$rootScope','$scope', 'Auth', function($rootScope,$scope, Auth) {
    $scope.$watch('currentUser',function(newval, oldval){
      $scope.user = newval.email? newval : newval.data;
    })

    $scope.logout = function() {
      Auth.logout();
    };
  }]);

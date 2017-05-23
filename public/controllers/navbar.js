angular.module('MyApp')
  .controller('NavbarCtrl', ['$rootScope','$scope', 'Auth', function($rootScope,$scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  }]);

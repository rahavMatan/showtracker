angular.module('MyApp')
  .factory('Subscription', ['$http', function($http) {
    return {
      subscribe: function(show, user) {
        console.log('sub');
        return $http.post('/api/subscribe', { showId: show._id }).then(function(res){
          console.log(res);
        });
      },
      unsubscribe: function(show, user) {
        return $http.post('/api/unsubscribe', { showId: show._id });
      }
    };
}]);
angular.module('MyApp')
  .directive('repeatPassword', function() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModelctrl) {
        // ngModelctrl == repeated password ngModelCtrl.
        // otherInput == password ngModelCtrl.

        var otherInput = elem.inheritedData("$formController").password;

        ngModelctrl.$parsers.push(function(value) {
          console.log('ngmodel ctrl parser');
          if (value === otherInput.$viewValue) {
            ngModelctrl.$setValidity('repeat', true);
            return value;
          }
          ngModelctrl.$setValidity('repeat', false);
        });

        otherInput.$parsers.push(function(value) {
          console.log('other input');
          ngModelctrl.$setValidity('repeat', value === ngModelctrl.$viewValue);
          return value;
        });
      }
    };
  });

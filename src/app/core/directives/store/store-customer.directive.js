function storeCustomerDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template: '<div>{{user.name}}</div>',
    controller: testController,
    replace: true
  };
}

function testController($scope) {
  $scope.test = 'testing';
}

export default storeCustomerDirective;

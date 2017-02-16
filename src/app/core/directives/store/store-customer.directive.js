function storeCustomerDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template: '',
    scope: {
      user: '=data'
    },
    replace: true
  };
}

export default storeCustomerDirective;

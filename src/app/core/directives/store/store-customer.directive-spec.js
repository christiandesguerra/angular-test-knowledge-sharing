import 'angular';
import 'angular-mocks';
import '../../core.module';

fdescribe('store customer view directive', () => {
  var element, scope;

  beforeEach(angular.mock.module('core.shared'));

  beforeEach(angular.mock.inject(function(_$rootScope_, _$compile_) {
    element = angular.element('<store-customer-view data="user"></store-customer-view>');
    scope = _$rootScope_.$new();
    scope.$apply(function() {
      scope.user = {name: 'Ian'};
      _$compile_(element)(scope);
    });
  }));

  it('should have the name', function() {
    expect(element[0].innerText).toEqual('Ian');
  });
});

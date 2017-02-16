import 'angular';
import 'angular-mocks';
import '../../core.module';

fdescribe('store controller', () => {
  var controller;

  beforeEach(angular.mock.module('core.shared'));

  beforeEach(angular.mock.inject(function(_$controller_) {
    controller = _$controller_('StoreController');
  }));

  it('should have test variable', function() {
    expect(controller.test).toEqual('testing');
  })
});

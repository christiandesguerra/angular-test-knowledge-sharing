import angular from 'angular';
import 'angular-mocks';

import * as storeController from './store.controller';

describe('store controller', () => {

  beforeEach(() => {
    const dummyModule = angular.module('dummyModule', []);
    dummyModule.controller('store', storeController);
    angular.mock.module('dummyModule');
  });
});

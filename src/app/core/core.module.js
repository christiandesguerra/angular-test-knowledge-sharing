const shared = angular.module('core.shared', []);


// Add directive imports above

import * as storeFactory from './services/store/store.factory';
// Add service imports above

import * as storeController from './controllers/store/store.controller'
//Add controler imports above

// Add directive to module above

shared.factory('store', storeFactory);
// Add service to module above

shared.controller('StoreController', storeController);
//Add controller to module above

export default shared;

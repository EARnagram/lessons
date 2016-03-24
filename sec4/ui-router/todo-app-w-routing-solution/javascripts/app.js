(function() {
  'use strict';

  angular
    .module('todoApp', ['ui.router'])
    .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todoHome', {
        url: '/',
        templateUrl:  'todoHome.html',
        controller:   'TodosController',
        controllerAs: 'vm'
      })
      .state('todoArchive', {
        url: '/archive',
        templateUrl:  'todoArchive.html',
        controller:   'TodosController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.admin.GenerateReport', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.GenerateReport', {
        url: '/admin',
        templateUrl: 'app/pages/admin/GenerateReport/GenerateReport.html',
          title: 'GenerateReport',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();
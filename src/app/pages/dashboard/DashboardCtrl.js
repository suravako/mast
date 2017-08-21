/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function ()
{
    'use strict';
    angular.module('BlurAdmin.pages.dashboard').
            controller('DashboardCtrl', DashboardCtrl);
    /** @ngInject */
    function DashboardCtrl($http, $scope, $element, $document, layoutPaths, baConfig)
    {
        //var layoutColors = baConfig.colors;
        $scope.selectedProduct = "";
        $scope.selectedProductAndRelease = "";
        $scope.products = ['RDBMS', 'DSCS'];

        $scope.getRelease = function () {
            $scope.selectedProductAndRelease = "";
            if ($scope.selectedProduct === "RDBMS") {
                $scope.releases = ['RDMS_MAIN_LINUX', 'RDBMS_12.2.0.1.0_LINUX.X64'];
            } else {
                $scope.releases = ['SQL INJECTION', 'Fortify Java Code', 'Hardcoded Passwords'];
            }
        };
        
        $scope.setSelectedOption = function () {
            $scope.selectedProductAndRelease =  $scope.selectedProduct + " " + $scope.selectedRelease;
        };
    }//end of controller

})();


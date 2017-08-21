/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
            .directive('pageTop', pageTop).controller('PageTopCtrl', PageTopCtrl);

    /** @ngInject */
    //             cookie = "3~DFE06D4C666285D1E030018A18B92FB9~Uravakonda~Srilatha~srilatha.uravakonda@oracle.com";

    function PageTopCtrl($scope) {
        $scope.username ="";
         //var cookie = $cookies.get('ORA_UCM_INFO');
        //var cookie = "3~DFE06D4C666285D1E030018A18B92FB9~Uravakonda~Srilatha~srilatha.uravakonda@oracle.com";

        console.log("Cookie=" + cookie);
        if (cookie !== null) {
            var email = cookie.split("~");
            $scope.username = email[email.length - 1];
        }
    }

    /** @ngInject */
    function pageTop() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/pageTop/pageTop.html'
        };
    }

//      app.controller("appCtrl", ['$cookies', '$scope', function ($cookies, $scope) {
//
//                    // Retrieving a cookie
//                  // var cookie = $cookies.get('ORA_UCM_INFO');
//                  var cookie  = "3~90E366ADDD966F84E040548C2D70644F~Sudhakar~Betha~sudhakar.betha@oracle.com";
//                    
//                    console.log("Cookie=" + cookie);
//                        if(cookie !== null) {
//                            var email=         cookie.split("~");
//                            $scope.username =         email[email.length-1];
//                        }
//
//                }]);


})();